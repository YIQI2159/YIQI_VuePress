import{_ as n,o as s,c as a,e as t}from"./app-5412e4fd.js";const e={},p=t(`<h1 id="第四种交换机类型" tabindex="-1"><a class="header-anchor" href="#第四种交换机类型" aria-hidden="true">#</a> 第四种交换机类型</h1><p>通过前面的学习，我们已经介绍了三种交换机类型，现在我们来介绍一下第四种交换机类型<code>header</code>，它是根据头部信息来决定的，在我们发送的消息中是可以携带一些头部信息的（类似于HTTP），我们可以根据这些头部信息来决定路由到哪一个消息队列中。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RabbitConfiguration</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Bean</span><span class="token punctuation">(</span><span class="token string">&quot;headerExchange&quot;</span><span class="token punctuation">)</span>  <span class="token comment">//注意这里返回的是HeadersExchange</span>
    <span class="token keyword">public</span> <span class="token class-name">HeadersExchange</span> <span class="token function">exchange</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">ExchangeBuilder</span>
                <span class="token punctuation">.</span><span class="token function">headersExchange</span><span class="token punctuation">(</span><span class="token string">&quot;amq.headers&quot;</span><span class="token punctuation">)</span>  <span class="token comment">//RabbitMQ为我们预置了两个，这里用第一个就行</span>
                <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Bean</span><span class="token punctuation">(</span><span class="token string">&quot;yydsQueue&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Queue</span> <span class="token function">queue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">QueueBuilder</span><span class="token punctuation">.</span><span class="token function">nonDurable</span><span class="token punctuation">(</span><span class="token string">&quot;yyds&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Bean</span><span class="token punctuation">(</span><span class="token string">&quot;binding&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Binding</span> <span class="token function">binding2</span><span class="token punctuation">(</span><span class="token annotation punctuation">@Qualifier</span><span class="token punctuation">(</span><span class="token string">&quot;headerExchange&quot;</span><span class="token punctuation">)</span> <span class="token class-name">HeadersExchange</span> exchange<span class="token punctuation">,</span>  <span class="token comment">//这里和上面一样的类型</span>
                           <span class="token annotation punctuation">@Qualifier</span><span class="token punctuation">(</span><span class="token string">&quot;yydsQueue&quot;</span><span class="token punctuation">)</span> <span class="token class-name">Queue</span> queue<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">BindingBuilder</span>
                <span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>queue<span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token keyword">to</span><span class="token punctuation">(</span>exchange<span class="token punctuation">)</span>   <span class="token comment">//使用HeadersExchange的to方法，可以进行进一步配置</span>
                      <span class="token comment">//.whereAny(&quot;a&quot;, &quot;b&quot;).exist();   这个是只要存在任意一个指定的头部Key就行</span>
                <span class="token comment">//.whereAll(&quot;a&quot;, &quot;b&quot;).exist();   这个是必须存在所有指定的的头部Key</span>
                <span class="token punctuation">.</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string">&quot;test&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">matches</span><span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">//比如我们现在需要消息的头部信息中包含test，并且值为hello才能转发给我们的消息队列</span>
                          <span class="token comment">//.whereAny(Collections.singletonMap(&quot;test&quot;, &quot;hello&quot;)).match();  传入Map也行，批量指定键值对</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
复制代码
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在我们来启动一下试试看：</p><p><img src="https://fast.itbaima.net/2023/03/08/NApBodythmfjzMV.jpg" alt="image-20220421110926077"></p><p>结果发现，消息可以成功发送到消息队列，这就是使用头部信息进行路由。</p><p>这样，我们就介绍完了所有四种类型的交换机。</p>`,7),o=[p];function c(u,i){return s(),a("div",null,o)}const k=n(e,[["render",c],["__file","j.html.vue"]]);export{k as default};