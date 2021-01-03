<h2 id="tailwindcss-nth-child-variants-plugin">Tailwindcss Nth Child Variants Plugin</h2>
<p>This repository is a plug in for <a href="https://github.com/tailwindlabs/tailwindcss">Tailwindcss</a> </p>
<h2 id="-installation"> Installation</h2>
<p>Install the plugin via npm:</p>
<pre><code>npm <span class="hljs-keyword">install</span> tailwindcss-nth-<span class="hljs-keyword">child</span>
</code></pre><h2 id="tailwind-config-js">tailwind.config.js</h2>
<p>Create an instance like this.</p>
<pre><code class="lang-js"><span class="hljs-keyword">const</span> Nth =  require(<span class="hljs-string">'tailwindcss-nth-child'</span>);
<span class="hljs-keyword">const</span> plugin =  <span class="hljs-keyword">new</span>  Nth(<span class="hljs-string">'&lt;nth-value&gt;'</span>)
<span class="hljs-keyword">module</span>.<span class="hljs-keyword">exports</span> = {
<span class="hljs-comment">// ...</span>
variants: {
    <span class="hljs-comment">// extend the backgroundColor variants</span>
    extend:{
      backgroundColor: [<span class="hljs-string">'nth-child'</span>],
    }
},
plugins: [
    plugin.nthChild() <span class="hljs-comment">// add-plugin</span>
],
}
</code></pre>
<blockquote>
<p>Extending the variants is important.</p>
</blockquote>
<h2 id="value-of-nth-value-">Value of <nth-value\></h2>
<p>You need to give <strong>nth-value</strong> in constructor method. Check the below examples.</p>
<h3 id="odd">odd</h3>
<p>To select odd child:</p>
<pre><code class="lang-js"><span class="hljs-keyword">const</span> plugin =  <span class="hljs-keyword">new</span>  Nth(<span class="hljs-string">'odd'</span>)
</code></pre>
<h3 id="even">even</h3>
<p>To select even child</p>
<pre><code class="lang-js"><span class="hljs-keyword">const</span> plugin =  <span class="hljs-keyword">new</span>  Nth(<span class="hljs-string">'even'</span>)
</code></pre>
<h3 id="first-child">first child</h3>
<p>It is simple just write <strong>1</strong> inside of constructor method. To select first child:</p>
<pre><code class="lang-js"><span class="hljs-keyword">const</span> plugin =  <span class="hljs-keyword">new</span>  Nth(<span class="hljs-string">'1'</span>)
</code></pre>
<h3 id="-x-n-y-">(x)n+(y)</h3>
<p>You can write which elements you want to select accordingly. You can check <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child">here</a> for usage of css nth-child </p>
<pre><code class="lang-js"><span class="hljs-keyword">const</span> plugin =  <span class="hljs-keyword">new</span>  Nth(<span class="hljs-string">'2n+1'</span>)
</code></pre>
<h2 id="examples">Examples</h2>
<p>Lets test with <strong>even</strong> child</p>
<pre><code class="lang-jsx"><span class="hljs-keyword">const</span>  Example  =  <span class="hljs-function"><span class="hljs-params">()</span>  =&gt;</span>  {
<span class="hljs-keyword">return</span>  (
<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">"nth-child:bg-red-400 transform first-child:rotate-45"</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span>  <span class="hljs-attr">className</span>=<span class="hljs-string">""</span>&gt;</span>Example 1<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">""</span>&gt;</span>Example 2<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">""</span>&gt;</span>Example 3<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">""</span>&gt;</span>Example 4<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">""</span>&gt;</span>Example 5<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">className</span>=<span class="hljs-string">""</span>&gt;</span>Example 6<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
);
};
</code></pre>
<p>Result:
<img src="https://i.imgur.com/kkx4k6w.png" alt="enter image description here"></p>
<h2 id="to-do">TO-DO</h2>
<ul>
<li>[x] Add nth-child selector</li>
<li>[ ] Add last-child selector</li>
<li>[ ] Add important modifier</li>
</ul>
