$files = @(
  'src\views\WhiteLabel.tsx',
  'src\views\digital-marketing\SocialMediaManagement.tsx',
  'src\views\digital-marketing\BrandStrategy.tsx',
  'src\views\digital-marketing\GoogleBusinessProfile.tsx',
  'src\views\digital-marketing\ContentMarketing.tsx',
  'src\views\digital-marketing\LeadGeneration.tsx',
  'src\views\digital-marketing\MetaAdsManagement.tsx',
  'src\views\digital-marketing\SEOService.tsx',
  'src\views\white-label\WhiteLabelPPC.tsx',
  'src\views\white-label\WhiteLabelSEO.tsx',
  'src\views\white-label\WhiteLabelSocialMedia.tsx',
  'src\views\white-label\WhiteLabelWebDevelopment.tsx'
)

foreach ($f in $files) {
  $path = "d:\Growth-Service\$f"
  $content = [System.IO.File]::ReadAllText($path)
  $changed = $false

  # Remove "use client"; line
  if ($content -match '"use client";') {
    $content = $content -replace '"use client";\r?\n', ''
    $changed = $true
  }

  # Replace react-router-dom Link import
  if ($content -match "react-router-dom") {
    $content = $content -replace "import \{ Link \} from 'react-router-dom';", "import Link from 'next/link';"
    $changed = $true
  }

  # Replace Button as={Link} to="..." -> remove as={Link}, keep to= (Button already handles href via next/link shim)
  # Actually: Button accepts href prop. Replace: as={Link} to="X" -> href="X"
  if ($content -match 'as=\{Link\}') {
    # Remove as={Link} prop
    $content = $content -replace '\s*as=\{Link\}', ''
    # Replace to=" with href=" only where it follows Button props context
    $content = $content -replace '\bto="', 'href="'
    $changed = $true
  }

  # Also replace standalone Link component: <Link to="X"> -> <Link href="X">
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
