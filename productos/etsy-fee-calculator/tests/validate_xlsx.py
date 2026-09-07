#!/usr/bin/env python3
"""Valida el .xlsx que genera la app. Uso: python3 validate_xlsx.py out.xlsx"""
import sys, zipfile, xml.etree.ElementTree as ET

f = sys.argv[1] if len(sys.argv) > 1 else 'out.xlsx'
NS = {'m': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
REQUIRED = ['[Content_Types].xml', '_rels/.rels', 'xl/workbook.xml',
            'xl/_rels/workbook.xml.rels', 'xl/styles.xml', 'xl/worksheets/sheet1.xml']
fails = []


def ok(cond, msg, extra=''):
    print(('PASS ' if cond else 'FAIL ') + msg + (f'  [{extra}]' if extra else ''))
    if not cond:
        fails.append(msg)


z = zipfile.ZipFile(f)
ok(z.testzip() is None, 'el ZIP no tiene entradas corruptas')
ok(all(p in z.namelist() for p in REQUIRED), 'están todas las partes OOXML obligatorias',
   ', '.join(z.namelist()))
sh = ET.fromstring(z.read('xl/worksheets/sheet1.xml'))
rows = sh.findall('.//m:row', NS)
ok(len(rows) >= 2, 'hay cabecera y al menos un producto', f'{len(rows)} filas')
ok(sh.find('.//m:pane', NS) is not None, 'la cabecera queda fija al desplazar')
ok(sh.find('.//m:autoFilter', NS) is not None, 'la tabla lleva filtro automático')
numeric = [c for c in rows[1].findall('m:c', NS) if c.find('m:v', NS) is not None]
ok(len(numeric) >= 7, 'los importes son números, no texto', f'{len(numeric)} celdas numéricas')

try:
    import openpyxl
    wb = openpyxl.load_workbook(f)
    ws = wb.active
    ok(True, 'openpyxl abre el archivo (motor independiente)', f'hoja "{ws.title}"')
    ok(isinstance(ws['G2'].value, (int, float)), 'el beneficio se lee como número',
       f'{ws["G2"].value} · formato {ws["G2"].number_format}')
    ok(ws['H2'].number_format.startswith('0.0'), 'el margen lleva formato de porcentaje',
       ws['H2'].number_format)
except ImportError:
    print('NOTA openpyxl no instalado; se omite la comprobación con motor independiente')

print('\nFALLOS:', len(fails))
sys.exit(1 if fails else 0)
