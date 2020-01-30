set -e

docker run --rm -it -p 8080:8080 -v $PWD:/home/node/app platzi-exchange:1.0 bash