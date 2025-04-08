---
outline: deep
---

# Test Whitelist Status

Run the following command on the whitelisted server:

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


## Error Cases

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

### Error Response

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