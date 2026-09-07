# Sincroniza el trabajo del Administrador (borradores, ESTADO.md) a una
# carpeta del Escritorio, y deja una tarea programada para que se repita
# sola cada día.
#
# Uso manual (una vez, para instalar la tarea programada):
#   powershell -ExecutionPolicy Bypass -File sync-local.ps1 -Instalar
#
# Uso normal (lo que ejecuta la tarea programada cada día):
#   powershell -ExecutionPolicy Bypass -File sync-local.ps1

param(
    [switch]$Instalar
)

$ErrorActionPreference = "Stop"

$RepoUrl      = "https://github.com/athonybcn5550555-ops/MUNDO-DRAKHTHHAR.git"
$Rama         = "claude/administrador-13xx3e"
$ClonLocal    = "$env:USERPROFILE\centro-de-mando-repo"
$CarpetaDestino = "$env:USERPROFILE\Desktop\Administrador JL"

function Sincronizar {
    if (-not (Test-Path $ClonLocal)) {
        git clone --branch $Rama $RepoUrl $ClonLocal
    } else {
        git -C $ClonLocal fetch origin $Rama
        git -C $ClonLocal checkout $Rama
        git -C $ClonLocal reset --hard "origin/$Rama"
    }

    New-Item -ItemType Directory -Force -Path $CarpetaDestino | Out-Null
    New-Item -ItemType Directory -Force -Path "$CarpetaDestino\pendientes" | Out-Null

    Copy-Item "$ClonLocal\centro-de-mando\ESTADO.md" "$CarpetaDestino\ESTADO.md" -Force
    Copy-Item "$ClonLocal\centro-de-mando\pendientes\*" "$CarpetaDestino\pendientes\" -Force -Recurse -ErrorAction SilentlyContinue

    Write-Host "Sincronizado en: $CarpetaDestino"
}

function Instalar-TareaProgramada {
    $ScriptPath = $MyInvocation.MyCommand.Path
    if (-not $ScriptPath) { $ScriptPath = $PSCommandPath }

    $Accion    = New-ScheduledTaskAction -Execute "powershell.exe" -Argument "-ExecutionPolicy Bypass -File `"$ScriptPath`""
    $Disparador = New-ScheduledTaskTrigger -Daily -At "09:00"

    Register-ScheduledTask -TaskName "Administrador JL - Sincronizar Escritorio" `
        -Action $Accion -Trigger $Disparador -Description "Copia los borradores y el estado del Administrador JL a una carpeta del Escritorio cada día." `
        -Force

    Write-Host "Tarea programada instalada: se ejecutará cada día a las 09:00 hora local."
}

if ($Instalar) {
    Instalar-TareaProgramada
    Sincronizar
} else {
    Sincronizar
}
