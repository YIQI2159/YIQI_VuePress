import{_ as e,o as a,c as s,e as n}from"./app-5412e4fd.js";const t={},i=n(`<h1 id="集群搭建" tabindex="-1"><a class="header-anchor" href="#集群搭建" aria-hidden="true">#</a> 集群搭建</h1><p>前面我们对于RabbitMQ的相关内容已经基本讲解完毕了，最后我们来尝试搭建一个集群，让RabbitMQ之间进行数据复制（镜像模式）稍微有点麻烦，跟着视频走吧。</p><p>可能会用到的一些命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> rabbitmqctl stop_app
<span class="token function">sudo</span> rabbitmqctl join_cluster rabbit@ubuntu-server
<span class="token function">sudo</span> rabbitmqctl start_app
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实现复制即可。</p><hr>`,6),c=[i];function r(d,l){return a(),s("div",null,c)}const u=e(t,[["render",r],["__file","k.html.vue"]]);export{u as default};
