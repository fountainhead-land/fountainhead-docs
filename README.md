# 双语言版本

需要再 zh 和 docs 目录下都创建一个文件

# 侧边导航栏

需要在这里docs/.vitepress/config.mts配置目录


# 部署

```sh
scp -r docs/.vitepress/dist/* root@188.245.104.126:/opt/1panel/apps/openresty/openresty/www/sites/docs.fountainhead.land/index/
```