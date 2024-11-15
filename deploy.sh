set -e

npm run build

cd dist

echo 'www.sleepwf.cn' > CNAME

git init
git checkout -b main
git add -A
git commit -m 'deploy'

cd -