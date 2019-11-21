# blurts-pageres

Firefox Monitor screenshots using pageres.

This script will grab the latest breach list from the production https://monitor.firefox.com site, and then loop over each breach and take a cropped screenshot of the breach details header with the breach logo, name, type.

## USAGE

```sh
git clone https://github.com/pdehaan/blurts-pageres.git blurts-pageres
cd blurts-pageres
npm install
node index
# wait and wait and wait
```

After screenshotting all the breach details pages, the cropped screenshots should be in a "./shots/" folder.
