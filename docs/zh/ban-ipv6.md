---
outline: deep
---
# 常见问题


## 检测ipv6

```sh
curl ip.sb
```

## 禁止 ipv6

```sh
vim /etc/sysctl.conf
```

添加如下代码

```bash
net.ipv6.conf.all.disable_ipv6 = 1
net.ipv6.conf.default.disable_ipv6 = 1
```

最后运行 

```bash
sysctl -p
```


