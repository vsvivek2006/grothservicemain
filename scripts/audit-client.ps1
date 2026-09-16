$dirs = @('src\views', 'src\views\design-development')
$results = @()

foreach ($dir in $dirs) {
  $full = "d:\Growth-Service\$dir"
  if (-not (Test-Path $full)) { continue }
  Get-ChildItem "$full\*.tsx" | ForEach-Object {
    $content = [System.IO.File]::ReadAllText($_.FullName)
    if ($content -notmatch '"use client"') { return }
    $hooks = ([regex]::Matches($content, 'useState|useEffect|useRef|useCallback|useMemo|useReducer|onClick|onChange|onSubmit|useRouter|usePathname|useSearchParams|window\.|document\.')).Count
    $rdom = if ($content -match 'react-router-dom') { 'YES' } else { 'no' }
    $results += [PSCustomObject]@{
      File  = $_.Name
      Hooks = $hooks
      RDom  = $rdom
    }
  }
}

$results | Sort-Object Hooks | Format-Table -AutoSize
