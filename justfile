push:
  npm run build
  rsync --progress dist/ raflynn@garfield.cs.mun.ca:~/.www/ -r
