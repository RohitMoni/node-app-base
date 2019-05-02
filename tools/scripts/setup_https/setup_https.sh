echo "test"

mkdir -p encryption

openssl req \
    -nodes \
    -new \
    -x509 \
    -subj "//C=US/ST=Rapture/L=Nowhere/O=Dis/CN=localhost" \
    -keyout encryption/server.key \
    -out encryption/server.cert

