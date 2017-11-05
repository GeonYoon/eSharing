function localtunnel {
  lt -s ssy01013 --port 8080
}
until localtunnel; do
echo "localtunnel server crashed"
sleep 2
done