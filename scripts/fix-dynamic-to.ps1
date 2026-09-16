$files = @(
  'src\views\OfficesHub.tsx',
  'src\views\NotFound.tsx',
  'src\views\CityHubPage.tsx',
  'src\views\LocationServicePage.tsx',
  'src\views\OfficeDetailPage.tsx'
)

foreach ($f in $files) {
  $path = "d:\Growth-Service\$f"
  $content = [System.IO.File]::ReadAllText($path)
  # Replace both to="..." and to={...} with href
  $before = $content
  $content = $content -replace '\bto=\{', 'href={'
  $content = $content -replace '\bto="', 'href="'
  if ($content -ne $before) {
    [System.IO.File]::WriteAllText($path, $content, [System.Text.UTF8Encoding]::new($false))
    Write-Host "Fixed: $f"
  }
}
Write-Host "Done."
