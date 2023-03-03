import{_ as s,c as a,o as n,a as e}from"./app.bff02bbe.js";const C=JSON.parse('{"title":"Linux 操作快捷键","description":"","frontmatter":{},"headers":[],"relativePath":"linux/linux-cli.md","lastUpdated":null}'),l={name:"linux/linux-cli.md"},p=e(`<h1 id="linux-操作快捷键" tabindex="-1">Linux 操作快捷键 <a class="header-anchor" href="#linux-操作快捷键" aria-hidden="true">#</a></h1><br><hr><h5 id="_1-mkdir-新建目录" tabindex="-1">1. mkdir 新建目录 <a class="header-anchor" href="#_1-mkdir-新建目录" aria-hidden="true">#</a></h5><h5 id="_2-rm-fr-删除目录、文件" tabindex="-1">2. rm -fr 删除目录、文件 <a class="header-anchor" href="#_2-rm-fr-删除目录、文件" aria-hidden="true">#</a></h5><h5 id="_3-ls-查看当前目录所有子目录及文件" tabindex="-1">3. ls (查看当前目录所有子目录及文件) <a class="header-anchor" href="#_3-ls-查看当前目录所有子目录及文件" aria-hidden="true">#</a></h5><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">-l 显示详情</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h5 id="_4-wget-下载远程文件" tabindex="-1">4. wget 下载远程文件 <a class="header-anchor" href="#_4-wget-下载远程文件" aria-hidden="true">#</a></h5><h5 id="_5-ln-s-创建软链接" tabindex="-1">5. ln -s 创建软链接 <a class="header-anchor" href="#_5-ln-s-创建软链接" aria-hidden="true">#</a></h5><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">例如：ln -s /youPath/youApp /usr/local/bin/youApp //将命令加到bin目录</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">注意：删除软连接时用rm命令，但是删除目录的软连接时，最后面不能加 / ，这样会导致是删除目录下面的文件</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h5 id="_6-whereis-搜索已安装程序的安装位置" tabindex="-1">6. whereis 搜索已安装程序的安装位置 <a class="header-anchor" href="#_6-whereis-搜索已安装程序的安装位置" aria-hidden="true">#</a></h5><h5 id="_7-vi-查看编辑文件" tabindex="-1">7. vi 查看编辑文件 <a class="header-anchor" href="#_7-vi-查看编辑文件" aria-hidden="true">#</a></h5><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">1. 打开文件(vi index.php)</span></span>
<span class="line"><span style="color:#A6ACCD;">2. i：进入编辑模式</span></span>
<span class="line"><span style="color:#A6ACCD;">3. x：保存和退出（同wq）</span></span>
<span class="line"><span style="color:#A6ACCD;">4. w：保存不退出</span></span>
<span class="line"><span style="color:#A6ACCD;">5. q：退出</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h5 id="_8-tar-文件解压-压缩" tabindex="-1">8. tar 文件解压，压缩 <a class="header-anchor" href="#_8-tar-文件解压-压缩" aria-hidden="true">#</a></h5><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">1. -zxf 直接解压，不提示</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h5 id="_9-history-查看所有历史执行命令" tabindex="-1">9.history (查看所有历史执行命令) <a class="header-anchor" href="#_9-history-查看所有历史执行命令" aria-hidden="true">#</a></h5><h5 id="_10-screen-用于-shell-断开之后-继续执行任务" tabindex="-1">10.screen （用于 shell 断开之后，继续执行任务） <a class="header-anchor" href="#_10-screen-用于-shell-断开之后-继续执行任务" aria-hidden="true">#</a></h5><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">1. -S &lt;作业名称&gt; 　指定screen作业的名称。</span></span>
<span class="line"><span style="color:#A6ACCD;">2. -r &lt;作业名称&gt; 　恢复离线的screen作业。</span></span>
<span class="line"><span style="color:#A6ACCD;">3. -ls或--list 　显示目前所有的screen作业。</span></span>
<span class="line"><span style="color:#A6ACCD;">4. 更多内容见手册</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h5 id="_11-右尖括号-输出重定向" tabindex="-1">11.右尖括号 &gt; (输出重定向) <a class="header-anchor" href="#_11-右尖括号-输出重定向" aria-hidden="true">#</a></h5><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">1. 将本应显示在命令行的内容输入到文件</span></span>
<span class="line"><span style="color:#A6ACCD;">    &gt; dir &gt; file.txt</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h5 id="_12-双右尖括号-将要输出的内容追加到末尾" tabindex="-1">12.双右尖括号 &gt;&gt; (将要输出的内容追加到末尾) <a class="header-anchor" href="#_12-双右尖括号-将要输出的内容追加到末尾" aria-hidden="true">#</a></h5><h5 id="_13-ip-addr-查看本地-ip-信息" tabindex="-1">13.ip addr 查看本地 ip 信息 <a class="header-anchor" href="#_13-ip-addr-查看本地-ip-信息" aria-hidden="true">#</a></h5><h5 id="_14-命令行网页浏览器-lynx-或者-links" tabindex="-1">14.命令行网页浏览器：lynx 或者 links <a class="header-anchor" href="#_14-命令行网页浏览器-lynx-或者-links" aria-hidden="true">#</a></h5><h5 id="_15、显示内存使用情况-free" tabindex="-1">15、显示内存使用情况：free <a class="header-anchor" href="#_15、显示内存使用情况-free" aria-hidden="true">#</a></h5><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">-b 　以Byte为单位显示内存使用情况。</span></span>
<span class="line"><span style="color:#A6ACCD;">-k 　以KB为单位显示内存使用情况。</span></span>
<span class="line"><span style="color:#A6ACCD;">-m 　以MB为单位显示内存使用情况。</span></span>
<span class="line"><span style="color:#A6ACCD;">-h 　以合适的单位显示内存使用情况，最大为三位数，自动计算对应的单位值。单位有：</span></span>
<span class="line"><span style="color:#A6ACCD;">-o 　不显示缓冲区调节列。</span></span>
<span class="line"><span style="color:#A6ACCD;">-s &lt;间隔秒数&gt; 　持续观察内存使用状况。</span></span>
<span class="line"><span style="color:#A6ACCD;">-t 　显示内存总和列。</span></span>
<span class="line"><span style="color:#A6ACCD;">-V 　显示版本信息。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h5 id="_16、磁盘使用情况-df" tabindex="-1">16、磁盘使用情况：df <a class="header-anchor" href="#_16、磁盘使用情况-df" aria-hidden="true">#</a></h5><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">-h 以可读的格式显示</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h5 id="_17、显示当前进程-process-的状态-ps" tabindex="-1">17、显示当前进程 (process) 的状态：ps <a class="header-anchor" href="#_17、显示当前进程-process-的状态-ps" aria-hidden="true">#</a></h5><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">例如搜索nginx相关：ps -ef|grep nginx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h5 id="_18、关闭进程-kill" tabindex="-1">18、关闭进程：kill <a class="header-anchor" href="#_18、关闭进程-kill" aria-hidden="true">#</a></h5><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">后面跟上进程id，用ps查看</span></span>
<span class="line"><span style="color:#A6ACCD;">例如：kill -9 29784</span></span>
<span class="line"><span style="color:#A6ACCD;">备注：参数-9是指直接杀死进程，默认参数为-15：让进程自行退出</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h5 id="_19、netstat" tabindex="-1">19、netstat <a class="header-anchor" href="#_19、netstat" aria-hidden="true">#</a></h5><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">仅显示被监听端口及对应进程</span></span>
<span class="line"><span style="color:#A6ACCD;">    netstat -ntlp</span></span>
<span class="line"><span style="color:#A6ACCD;">简化搜索</span></span>
<span class="line"><span style="color:#A6ACCD;">    netstat -an | grep 9000</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h5 id="_20、find" tabindex="-1">20、find <a class="header-anchor" href="#_20、find" aria-hidden="true">#</a></h5><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">查找文件</span></span>
<span class="line"><span style="color:#A6ACCD;">    find 指定文件夹 选项 待搜索文件名</span></span>
<span class="line"><span style="color:#A6ACCD;">    find / -name phpize 注：这个命令是在根目录下查找phpize文件</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h5 id="_21、修改文件所有者" tabindex="-1">21、修改文件所有者 <a class="header-anchor" href="#_21、修改文件所有者" aria-hidden="true">#</a></h5><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">chgrp用户修改所属组</span></span>
<span class="line"><span style="color:#A6ACCD;">例：chgrp 组名 文件名 -R</span></span>
<span class="line"><span style="color:#A6ACCD;">chown可同时修改所有者及组</span></span>
<span class="line"><span style="color:#A6ACCD;">例：chown -R 用户名 文件名</span></span>
<span class="line"><span style="color:#A6ACCD;">例：chown -R 用户名:组名 文件名</span></span>
<span class="line"><span style="color:#A6ACCD;">-R表示递归目录下所有文件</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,37),r=[p];function i(c,t,d,o,h,b){return n(),a("div",null,r)}const m=s(l,[["render",i]]);export{C as __pageData,m as default};
