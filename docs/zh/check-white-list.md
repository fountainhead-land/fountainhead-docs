---
outline: deep
---

# 测试白名单生效

在白名单服务器上运行

```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "getSlot"
  }' \
  https://mainnet-ams.fountainhead.land
```


## 错误情况

```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "getSlot"
  }' \
  https://mainnet-ams.fountainhead.land
```

### 错误返回

```bash
{
  "jsonrpc": "2.0",
  "id": 1,
  "error": {
    "code": -32000,
    "message": "Not in whitelist",
    "details": "Please access https://fountainhead.land for whitelisting information"
  }
}
```