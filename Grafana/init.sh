#!/bin/sh

# Add route to Kubernetes network
ip route add 10.166.6.0/24 via 10.166.6.1

# Start Grafana
/run.sh
