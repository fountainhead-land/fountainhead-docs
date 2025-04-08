---
outline: deep
---
# Common Issues


## Check IPv6

```sh
curl ip.sb
```

## Disable IPv6

```sh
vim /etc/sysctl.conf
```

Add the following code:

```bash
net.ipv6.conf.all.disable_ipv6 = 1
net.ipv6.conf.default.disable_ipv6 = 1
```

Finally, run:

```bash
sysctl -p
``` 