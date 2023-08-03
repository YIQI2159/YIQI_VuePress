import{_ as e,o as n,c as i,e as d}from"./app-5412e4fd.js";const s="/YIQI_VuePress/image/uTools_1684747662797.png",t={},a=d('<p>docker pull xxx 从官方仓库拉取</p><p>docker images 查看当前拉取的镜像</p><p>docker ps 查看当前运行容器</p><p>docker ps -a 查看所有容器</p><p>docker run --name=xxx xxx 启动一个自定义名字的容器</p><p>docker start id/name 启动指定容器</p><p>docker stop 容器id/name 关闭指定容器</p><p>docker restart id/name 重启容器</p><p>docker rmi id/name 删除容器(未运行)</p><p>docker run --rm 镜像名称 容器在停止后自动删除，我们可以在运行时添加<code>--rm</code>参数：</p><p>docker pull centos/ubuntu/... 拉取一个带操作系统的容器</p><p>docker run -it centos/ubuntu 开启centos的终端</p><p>uname -a 查看centos内核</p><p>exit 退出终端,并结束centos容器</p><p><img src="'+s+`" alt="An image"></p><p>centos容器为base image(镜像层)</p><p>negix等为中间的镜像(镜像层)</p><p>container为容器层</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker run -it ubuntu
apt update
apt install openjdk-8-jdk
........
exit
docker commit ubuntu名字或id 打包名字		打包
docker images	查看打包
docker run --rm -it 打包名字
不推荐这种形式
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>docker history 容器名称 查看容器修改日志</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>推荐形式 touch Dockerfile
vim Dockerfile

From &lt;base image&gt;		ubuntu...
RUN apt update
RUN apt install -y openjdk-8-jdk

构建:	docker build -t ubuntu-java-file .		点为当前目录,在当前目录下寻找Dockerfile
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><nav class="table-of-contents"><ul></ul></nav>`,22),c=[a];function r(l,u){return n(),i("div",null,c)}const p=e(t,[["render",r],["__file","b.html.vue"]]);export{p as default};
