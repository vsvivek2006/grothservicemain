$path = "d:\Growth-Service\src\views\NotFound.tsx"
$content = [System.IO.File]::ReadAllText($path)
$content = $content -replace '\bto="', 'href="'
[System.IO.File]::WriteAllText($path, $content, [System.Text.UTF8Encoding]::new($false))
Write-Host "Fixed to= -> href= in NotFound.tsx"

# Also fix all the Phase 5 files that might have to= remaining
$files = @(
  'src\views\TrustVerification.tsx',
  'src\views\LocationServicePage.tsx',
  'src\views\OfficeDetailPage.tsx',
  'src\views\CityHubPage.tsx',
  'src\views\DesignDevelopment.tsx',
  'src\views\DigitalMarketing.tsx',
  'src\views\OfficesHub.tsx',
  'src\views\design-development\UIUXDesign.tsx',
  'src\views\design-development\WebsiteDevelopment.tsx',
  'src\views\design-development\EcommerceDevelopment.tsx',
  'src\views\design-development\MobileAppDevelopment.tsx',
  'src\views\design-development\WordPressDevelopment.tsx'
)

foreach ($f in $files) {
  $p = "d:\Growth-Service\$f"
  $c = [System.IO.File]::ReadAllText($p)
  $count = ([regex]::Matches($c, '\bto="')).Count
  if ($count -gt 0) {
    $c = $c -replace '\bto="', 'href="'
    [System.IO.File]::WriteAllText($p, $c, [System.Text.UTF8Encoding]::new($false))
    Write-Host "Fixed $count to= in $f"
  }
}
Write-Host "Done."
