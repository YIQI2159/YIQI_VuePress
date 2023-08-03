import{_ as e,o as i,c as n,e as d}from"./app-5412e4fd.js";const s={},a=d(`<h2 id="基本命令" tabindex="-1"><a class="header-anchor" href="#基本命令" aria-hidden="true">#</a> 基本命令</h2><p>服务命令: sudo ufw disable guan 关闭防火墙 sudo apt update sudo apt install redis-server sudo service redis-server start 启动服务(不带配置文件) redis-cli 启动客户端 shutdown 关闭</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>set key val
mset key val key1 val1.....
get key
mget key key1 key2.....
del k1 删除k1
keys *  查看数据库中所有的键值
exists  &lt;key1&gt;   查询某个键是否存在
randomkey   随机拿一个键
rename  &lt;key2&gt;  &lt;新的名称&gt;   修改一个键为另一个键
修改一个键为另一个键   查看数据类型
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>set k1 qqq ex 10	10秒后自动删除k1
set k1 qqq px 10    10毫秒后自动删除k1
ttl &lt;key&gt;    -- 秒显示
pttl &lt;key&gt;    -- 毫秒显示
persist &lt;key&gt;  --转换为永久
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>哈希类型
hset key key1 val1 key2 val2.....//一个键包含好几个键值对
hget key
hgetall key
hdel key keyn    删除大键中的小键
hdel key    删除整个大键
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>list类型
lpush key val1 val2 val3.....从头插入 倒序
rpush key val1 val2 val3.....从尾插入 正序
linsert key after valn val  在第n个值后插入新的值
lindex key n  获得某个(n-1)元素
lrange key 0 n  获得0-n之间的元素 n为负表示从倒数第几个元素开始
lpop key  出栈一个元素(删除)
rpop key
rpoplpush 当前列 目标列   将前一个数组倒数第一个元素取出放到第二个数组的头
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Set集合
sadd key val val val....
scard key  看有多少个值
sismember key val 判断是否有指定(val)值
smembers key  列出所有值
spop key 随机移除一个值
srem key val 移除指定值
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>set集合运算
sdiff &lt;key1&gt; &lt;key2&gt;  集合之间的差集
sinter &lt;key1&gt; &lt;key2&gt;  集合之间的交集
sunion &lt;key1&gt; &lt;key2&gt;  求并集
sdiffstore 目标 &lt;key1&gt; &lt;key2&gt;  将集合之间的差集存到目标集合中
sinterstore 目标 &lt;key1&gt; &lt;key2&gt;  同上
sunionstore 目标 &lt;key1&gt; &lt;key2&gt;  同上
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>SortedSet 
zadd key val score 按score大小进行排序
zcard key 查询有多少个值
zrem key val 移除
zrange key 0 -1 取所有值
zrangebyscore key min max 查询min-max之间对应的值
zrank key num 查询num在集合中排第几
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="进阶操作" tabindex="-1"><a class="header-anchor" href="#进阶操作" aria-hidden="true">#</a> 进阶操作</h2><h3 id="保存" tabindex="-1"><a class="header-anchor" href="#保存" aria-hidden="true">#</a> 保存</h3><p>save 将数据保存到硬盘(redis下的dump.rdb) bgsave 后台保存</p><h3 id="事务和锁机制" tabindex="-1"><a class="header-anchor" href="#事务和锁机制" aria-hidden="true">#</a> 事务和锁机制</h3><p>multi 开启事务 以下指令执行时将放到指令队列,并不会直接执行 exec 结束事务,执行指令 discard 中途取消事务</p><h3 id="锁机制" tabindex="-1"><a class="header-anchor" href="#锁机制" aria-hidden="true">#</a> 锁机制</h3><p>watch key 监控key</p><h3 id="开启事务" tabindex="-1"><a class="header-anchor" href="#开启事务" aria-hidden="true">#</a> 开启事务</h3><p>若在事务编写中,有其他数据提交(同一个键),则事务不会执行 unwatch 断开</p>`,18),l=[a];function r(t,v){return i(),n("div",null,l)}const u=e(s,[["render",r],["__file","b.html.vue"]]);export{u as default};
