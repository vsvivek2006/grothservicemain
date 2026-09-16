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
  $path = "d:\Growth-Service\$f"
  $content = [System.IO.File]::ReadAllText($path)
  $changed = $false

  if ($content -match '"use client"') {
    $content = $content -replace '"use client";\r?\n', ''
    $changed = $true
  }

  if ($content -match "react-router-dom") {
    # Replace named Link import
    $content = $content -replace "import \{ Link \} from 'react-router-dom';", "import Link from 'next/link';"
    $content = $content -replace 'import \{ Link \} from "react-router-dom";', 'import Link from "next/link";'
    # Remove Link from multi-import (e.g. import { Link, X } -> import { X })
    $content = $content -replace ',\s*Link\b', ''
    $content = $content -replace '\bLink,\s*', ''
    $changed = $true
  }

  # Replace to=" with href=" (next/link uses href)
  if ($content -match 'import Link from') {
    $content = $content -replace '\bto="', 'href="'
  }

  if ($changed) {
    [System.IO.File]::WriteAllText($path, $content, [System.Text.UTF8Encoding]::new($false))
    Write-Host "CONVERTED: $f"
  } else {
    Write-Host "SKIPPED: $f"
  }
}
Write-Host "Done."
