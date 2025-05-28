import{s as rl,n as hl,o as Il}from"../chunks/scheduler.362310b7.js";import{S as dl,i as El,g as M,s as t,r as p,A as Cl,h as U,f as a,c as e,j as ml,u as T,x as j,k as wl,y as Rl,a as n,v as i,d as c,t as J,w as y}from"../chunks/index.57dfc70d.js";import{C as Ml}from"../chunks/CodeBlock.5d40996c.js";import{H as f,E as bl}from"../chunks/index.fa158b42.js";function Nl(Ul){let o,L,G,W,u,F,m,pl=`The NVIDIA TensorRT-LLM (TRTLLM) backend is a high-performance backend for LLMs
that uses NVIDIA’s TensorRT library for inference acceleration.
It makes use of specific optimizations for NVIDIA GPUs, such as custom kernels.`,Y,w,Tl=`To use the TRTLLM backend <strong>you need to compile</strong> <code>engines</code> for the models you want to use.
Each <code>engine</code> must be compiled for a given set of:`,x,r,il="<li>GPU architecture that you will use for inference (e.g. A100, L40, etc.)</li> <li>Maximum batch size</li> <li>Maximum input length</li> <li>Maximum output length</li> <li>Maximum beams width</li>",_,h,X,I,cl=`Check the <a href="https://nvidia.github.io/TensorRT-LLM/reference/support-matrix.html" rel="nofollow">support matrix</a> to see which models are
supported.`,$,d,v,E,Jl=`You can use <a href="https://github.com/huggingface/optimum-nvidia" rel="nofollow">Optimum-NVIDIA</a> to compile engines for the models you
want to use.`,z,C,D,R,yl="Your compiled engine will be saved in the <code>/tmp/engines/$MODEL_NAME</code> directory, in a subfolder named after the GPU used to compile the model.",H,b,q,N,ol="Run TGI-TRTLLM Docker image with the compiled engine:",O,B,P,V,K,S,jl='To develop TRTLLM backend, you can use <a href="https://containers.dev/" rel="nofollow">dev containers</a> with the following <code>.devcontainer.json</code> file:',ll,Q,sl,A,ul="and <code>Dockerfile_trtllm</code>:",al,k,nl,g,tl,Z,el;return u=new f({props:{title:"TensorRT-LLM backend",local:"tensorrt-llm-backend",headingTag:"h1"}}),h=new f({props:{title:"Supported models",local:"supported-models",headingTag:"h2"}}),d=new f({props:{title:"Compiling engines",local:"compiling-engines",headingTag:"h2"}}),C=new Ml({props:{code:"TU9ERUxfTkFNRSUzRCUyMm1ldGEtbGxhbWElMkZMbGFtYS0zLjEtOEItSW5zdHJ1Y3QlMjIlMEFERVNUSU5BVElPTiUzRCUyMiUyRnRtcCUyRmVuZ2luZXMlMkYlMjRNT0RFTF9OQU1FJTIyJTBBSEZfVE9LRU4lM0QlMjJoZl94eHglMjIlMEElMjMlMjBDb21waWxlJTIwdGhlJTIwZW5naW5lJTIwdXNpbmclMjBPcHRpbXVtLU5WSURJQSUwQSUyMyUyMFRoaXMlMjB3aWxsJTIwY3JlYXRlJTIwYSUyMGNvbXBpbGVkJTIwZW5naW5lJTIwaW4lMjB0aGUlMjAlMkZ0bXAlMkZlbmdpbmVzJTJGbWV0YS1sbGFtYSUyRkxsYW1hLTMuMS04Qi1JbnN0cnVjdCUwQSUyMyUyMGRpcmVjdG9yeSUyMGZvciUyMDElMjBHUFUlMEFkb2NrZXIlMjBydW4lMjAlNUMlMEElMjAlMjAtLXJtJTIwJTVDJTBBJTIwJTIwLWl0JTIwJTVDJTBBJTIwJTIwLS1ncHVzJTNEMSUyMCU1QyUwQSUyMCUyMC0tc2htLXNpemUlM0QxZyUyMCU1QyUwQSUyMCUyMC12JTIwJTIyJTI0REVTVElOQVRJT04lMjIlM0ElMkZlbmdpbmUlMjAlNUMlMEElMjAlMjAtZSUyMEhGX1RPS0VOJTNEJTI0SEZfVE9LRU4lMjAlNUMlMEElMjAlMjAtZSUyMEhGX0hVQl9FTkFCTEVfSEZfVFJBTlNGRVIlM0QxJTIwJTVDJTBBJTIwJTIwaHVnZ2luZ2ZhY2UlMkZvcHRpbXVtLW52aWRpYSUzQXYwLjEuMGI5LXB5MzEwJTIwJTVDJTBBJTIwJTIwJTIwJTIwYmFzaCUyMC1jJTIwJTIyb3B0aW11bS1jbGklMjBleHBvcnQlMjB0cnRsbG0lMjAlNUMlMEElMjAlMjAlMjAlMjAtLXRwJTNEMSUyMCU1QyUwQSUyMCUyMCUyMCUyMC0tcHAlM0QxJTIwJTVDJTBBJTIwJTIwJTIwJTIwLS1tYXgtYmF0Y2gtc2l6ZSUzRDY0JTIwJTVDJTBBJTIwJTIwJTIwJTIwLS1tYXgtaW5wdXQtbGVuZ3RoJTIwNDA5NiUyMCU1QyUwQSUyMCUyMCUyMCUyMC0tbWF4LW91dHB1dC1sZW5ndGglMjA4MTkyJTIwJTVDJTBBJTIwJTIwJTIwJTIwLS1tYXgtYmVhbXMtd2lkdGglM0QxJTIwJTVDJTBBJTIwJTIwJTIwJTIwLS1kZXN0aW5hdGlvbiUyMCUyRnRtcCUyRmVuZ2luZSUyMCU1QyUwQSUyMCUyMCUyMCUyMCUyNE1PREVMX05BTUUlMjAlMjYlMjYlMjBjcCUyMC1yTCUyMCUyRnRtcCUyRmVuZ2luZSUyRiolMjAlMkZlbmdpbmUlMkYlMjI=",highlighted:`MODEL_NAME=<span class="hljs-string">&quot;meta-llama/Llama-3.1-8B-Instruct&quot;</span>
DESTINATION=<span class="hljs-string">&quot;/tmp/engines/<span class="hljs-variable">$MODEL_NAME</span>&quot;</span>
HF_TOKEN=<span class="hljs-string">&quot;hf_xxx&quot;</span>
<span class="hljs-comment"># Compile the engine using Optimum-NVIDIA</span>
<span class="hljs-comment"># This will create a compiled engine in the /tmp/engines/meta-llama/Llama-3.1-8B-Instruct</span>
<span class="hljs-comment"># directory for 1 GPU</span>
docker run \\
  --<span class="hljs-built_in">rm</span> \\
  -it \\
  --gpus=1 \\
  --shm-size=1g \\
  -v <span class="hljs-string">&quot;<span class="hljs-variable">$DESTINATION</span>&quot;</span>:/engine \\
  -e HF_TOKEN=<span class="hljs-variable">$HF_TOKEN</span> \\
  -e HF_HUB_ENABLE_HF_TRANSFER=1 \\
  huggingface/optimum-nvidia:v0.1.0b9-py310 \\
    bash -c <span class="hljs-string">&quot;optimum-cli export trtllm \\
    --tp=1 \\
    --pp=1 \\
    --max-batch-size=64 \\
    --max-input-length 4096 \\
    --max-output-length 8192 \\
    --max-beams-width=1 \\
    --destination /tmp/engine \\
    <span class="hljs-variable">$MODEL_NAME</span> &amp;&amp; cp -rL /tmp/engine/* /engine/&quot;</span>`,wrap:!1}}),b=new f({props:{title:"Using the TRTLLM backend",local:"using-the-trtllm-backend",headingTag:"h2"}}),B=new Ml({props:{code:"TU9ERUxfTkFNRSUzRCUyMm1ldGEtbGxhbWElMkZMbGFtYS0zLjEtOEItSW5zdHJ1Y3QlMjIlMEFERVNUSU5BVElPTiUzRCUyMiUyRnRtcCUyRmVuZ2luZXMlMkYlMjRNT0RFTF9OQU1FJTIyJTBBSEZfVE9LRU4lM0QlMjJoZl94eHglMjIlMEFkb2NrZXIlMjBydW4lMjAlNUMlMEElMjAlMjAtLWdwdXMlMjAxJTIwJTVDJTBBJTIwJTIwLS1zaG0tc2l6ZSUzRDFnJTIwJTVDJTBBJTIwJTIwLWl0JTIwJTVDJTBBJTIwJTIwLS1ybSUyMCU1QyUwQSUyMCUyMC1wJTIwMzAwMCUzQTMwMDAlMjAlNUMlMEElMjAlMjAtZSUyME1PREVMJTNEJTI0TU9ERUxfTkFNRSUyMCU1QyUwQSUyMCUyMC1lJTIwUE9SVCUzRDMwMDAlMjAlNUMlMEElMjAlMjAtZSUyMEhGX1RPS0VOJTNEJTI0SEZfVE9LRU4lMjAlNUMlMEElMjAlMjAtdiUyMCUyMiUyNERFU1RJTkFUSU9OJTIyJTJGJTNDWU9VUl9HUFVfQVJDSElURUNUVVJFJTNFJTJGZW5naW5lcyUzQSUyRmRhdGElMjAlNUMlMEElMjAlMjBnaGNyLmlvJTJGaHVnZ2luZ2ZhY2UlMkZ0ZXh0LWdlbmVyYXRpb24taW5mZXJlbmNlJTNBbGF0ZXN0LXRydGxsbSUyMCU1QyUwQSUyMCUyMC0tbW9kZWwtaWQlMjAlMkZkYXRhJTJGJTIwJTVDJTBBJTIwJTIwLS10b2tlbml6ZXItbmFtZSUyMCUyNE1PREVMX05BTUU=",highlighted:`MODEL_NAME=<span class="hljs-string">&quot;meta-llama/Llama-3.1-8B-Instruct&quot;</span>
DESTINATION=<span class="hljs-string">&quot;/tmp/engines/<span class="hljs-variable">$MODEL_NAME</span>&quot;</span>
HF_TOKEN=<span class="hljs-string">&quot;hf_xxx&quot;</span>
docker run \\
  --gpus 1 \\
  --shm-size=1g \\
  -it \\
  --<span class="hljs-built_in">rm</span> \\
  -p 3000:3000 \\
  -e MODEL=<span class="hljs-variable">$MODEL_NAME</span> \\
  -e PORT=3000 \\
  -e HF_TOKEN=<span class="hljs-variable">$HF_TOKEN</span> \\
  -v <span class="hljs-string">&quot;<span class="hljs-variable">$DESTINATION</span>&quot;</span>/&lt;YOUR_GPU_ARCHITECTURE&gt;/engines:/data \\
  ghcr.io/huggingface/text-generation-inference:latest-trtllm \\
  --model-id /data/ \\
  --tokenizer-name <span class="hljs-variable">$MODEL_NAME</span>`,wrap:!1}}),V=new f({props:{title:"Development",local:"development",headingTag:"h2"}}),Q=new Ml({props:{code:"JTdCJTBBJTIwJTIwJTIybmFtZSUyMiUzQSUyMCUyMkNVREElMjIlMkMlMEElMjAlMjAlMjJidWlsZCUyMiUzQSUyMCU3QiUwQSUyMCUyMCUyMCUyMCUyMmRvY2tlcmZpbGUlMjIlM0ElMjAlMjJEb2NrZXJmaWxlX3RydGxsbSUyMiUyQyUwQSUyMCUyMCUyMCUyMCUyMmNvbnRleHQlMjIlM0ElMjAlMjIuLiUyMiUwQSUyMCUyMCU3RCUyQyUwQSUyMCUyMCUyMnJlbW90ZUVudiUyMiUzQSUyMCU3QiUwQSUyMCUyMCUyMCUyMCUyMlBBVEglMjIlM0ElMjAlMjIlMjQlN0Jjb250YWluZXJFbnYlM0FQQVRIJTdEJTNBJTJGdXNyJTJGbG9jYWwlMkZjdWRhJTJGYmluJTIyJTJDJTBBJTIwJTIwJTIwJTIwJTIyTERfTElCUkFSWV9QQVRIJTIyJTNBJTIwJTIyJTI0TERfTElCUkFSWV9QQVRIJTNBJTJGdXNyJTJGbG9jYWwlMkZjdWRhJTJGbGliNjQlM0ElMkZ1c3IlMkZsb2NhbCUyRmN1ZGElMkZleHRyYXMlMkZDVVBUSSUyRmxpYjY0JTIyJTJDJTBBJTIwJTIwJTIwJTIwJTIyWExBX0ZMQUdTJTIyJTNBJTIwJTIyLS14bGFfZ3B1X2N1ZGFfZGF0YV9kaXIlM0QlMkZ1c3IlMkZsb2NhbCUyRmN1ZGElMjIlMEElMjAlMjAlN0QlMkMlMEElMjAlMjAlMjJjdXN0b21pemF0aW9ucyUyMiUyMCUzQSUyMCU3QiUwQSUyMCUyMCUyMCUyMCUyMmpldGJyYWlucyUyMiUyMCUzQSUyMCU3QiUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMmJhY2tlbmQlMjIlMjAlM0ElMjAlMjJDTGlvbiUyMiUwQSUyMCUyMCUyMCUyMCU3RCUwQSUyMCUyMCU3RCUwQSU3RA==",highlighted:`<span class="hljs-punctuation">{</span>
  <span class="hljs-attr">&quot;name&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;CUDA&quot;</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">&quot;build&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;dockerfile&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;Dockerfile_trtllm&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;context&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;..&quot;</span>
  <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">&quot;remoteEnv&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;PATH&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;\${containerEnv:PATH}:/usr/local/cuda/bin&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;LD_LIBRARY_PATH&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;$LD_LIBRARY_PATH:/usr/local/cuda/lib64:/usr/local/cuda/extras/CUPTI/lib64&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-attr">&quot;XLA_FLAGS&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;--xla_gpu_cuda_data_dir=/usr/local/cuda&quot;</span>
  <span class="hljs-punctuation">}</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">&quot;customizations&quot;</span> <span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
    <span class="hljs-attr">&quot;jetbrains&quot;</span> <span class="hljs-punctuation">:</span> <span class="hljs-punctuation">{</span>
      <span class="hljs-attr">&quot;backend&quot;</span> <span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;CLion&quot;</span>
    <span class="hljs-punctuation">}</span>
  <span class="hljs-punctuation">}</span>
<span class="hljs-punctuation">}</span>`,wrap:!1}}),k=new Ml({props:{code:"QVJHJTIwY3VkYV9hcmNoX2xpc3QlM0QlMjI3NS1yZWFsJTNCODAtcmVhbCUzQjg2LXJlYWwlM0I4OS1yZWFsJTNCOTAtcmVhbCUyMiUwQUFSRyUyMGJ1aWxkX3R5cGUlM0RyZWxlYXNlJTBBQVJHJTIwb21waV92ZXJzaW9uJTNENC4xLjclMEElMEElMjMlMjBDVURBJTIwZGVwZW5kZW50JTIwZGVwZW5kZW5jaWVzJTIwcmVzb2x2ZXIlMjBzdGFnZSUwQUZST00lMjBudmlkaWElMkZjdWRhJTNBMTIuNi4zLWN1ZG5uLWRldmVsLXVidW50dTI0LjA0JTIwQVMlMjBjdWRhLWJ1aWxkZXIlMEElMEFSVU4lMjBhcHQtZ2V0JTIwdXBkYXRlJTIwJTI2JTI2JTIwREVCSUFOX0ZST05URU5EJTNEbm9uaW50ZXJhY3RpdmUlMjBhcHQtZ2V0JTIwaW5zdGFsbCUyMC15JTIwJTVDJTBBJTIwJTIwJTIwJTIwYnVpbGQtZXNzZW50aWFsJTIwJTVDJTBBJTIwJTIwJTIwJTIwY21ha2UlMjAlNUMlMEElMjAlMjAlMjAlMjBjdXJsJTIwJTVDJTBBJTIwJTIwJTIwJTIwZ2NjLTE0JTIwJTIwJTVDJTBBJTIwJTIwJTIwJTIwZyUyQiUyQi0xNCUyMCU1QyUwQSUyMCUyMCUyMCUyMGdpdCUyMCU1QyUwQSUyMCUyMCUyMCUyMGdpdC1sZnMlMjAlNUMlMEElMjAlMjAlMjAlMjBsbGQlMjAlNUMlMEElMjAlMjAlMjAlMjBsaWJzc2wtZGV2JTIwJTVDJTBBJTIwJTIwJTIwJTIwbGlidWN4LWRldiUyMCU1QyUwQSUyMCUyMCUyMCUyMGxpYmFzYW44JTIwJTVDJTBBJTIwJTIwJTIwJTIwbGlidWJzYW4xJTIwJTVDJTBBJTIwJTIwJTIwJTIwbmluamEtYnVpbGQlMjAlNUMlMEElMjAlMjAlMjAlMjBwa2ctY29uZmlnJTIwJTVDJTBBJTIwJTIwJTIwJTIwcGlweCUyMCU1QyUwQSUyMCUyMCUyMCUyMHB5dGhvbjMlMjAlNUMlMEElMjAlMjAlMjAlMjBweXRob24zLWRldiUyMCU1QyUwQSUyMCUyMCUyMCUyMHB5dGhvbjMtc2V0dXB0b29scyUyMCU1QyUwQSUyMCUyMCUyMCUyMHRhciUyMCU1QyUwQSUyMCUyMCUyMCUyMHdnZXQlMjAtLW5vLWluc3RhbGwtcmVjb21tZW5kcyUyMCUyNiUyNiUyMCU1QyUwQSUyMCUyMCUyMCUyMHBpcHglMjBlbnN1cmVwYXRoJTBBJTBBRU5WJTIwVEdJX0lOU1RBTExfUFJFRklYJTNEJTJGdXNyJTJGbG9jYWwlMkZ0Z2klMEFFTlYlMjBURU5TT1JSVF9JTlNUQUxMX1BSRUZJWCUzRCUyRnVzciUyRmxvY2FsJTJGdGVuc29ycnQlMEElMEElMjMlMjBJbnN0YWxsJTIwT3Blbk1QSSUwQUZST00lMjBjdWRhLWJ1aWxkZXIlMjBBUyUyMG1waS1idWlsZGVyJTBBV09SS0RJUiUyMCUyRm9wdCUyRnNyYyUyRm1waSUwQSUwQUFSRyUyMG9tcGlfdmVyc2lvbiUwQUVOViUyME9NUElfVkVSU0lPTiUzRCUyNCU3Qm9tcGlfdmVyc2lvbiU3RCUwQUVOViUyME9NUElfVEFSQkFMTF9GSUxFTkFNRSUzRG9wZW5tcGktJTI0JTdCT01QSV9WRVJTSU9OJTdELnRhci5iejIlMEFBREQlMjAtLWNoZWNrc3VtJTNEc2hhMjU2JTNBNTRhMzNjYjdhZDgxZmYwOTc2ZjE1YTZjYzgwMDNjMzkyMmYwZjNkOGNlZWQxNGUxODEzZWYzNjAzZjIyY2QzNCUyMCU1QyUwQSUyMCUyMCUyMCUyMGh0dHBzJTNBJTJGJTJGZG93bmxvYWQub3Blbi1tcGkub3JnJTJGcmVsZWFzZSUyRm9wZW4tbXBpJTJGdjQuMSUyRiUyNCU3Qk9NUElfVEFSQkFMTF9GSUxFTkFNRSU3RCUyMC4lMEElMEFSVU4lMjB0YXIlMjAtLXN0cmlwLWNvbXBvbmVudHMlM0QxJTIwLXhmJTIwJTI0JTdCT01QSV9UQVJCQUxMX0ZJTEVOQU1FJTdEJTIwJTI2JTI2JTVDJTBBJTIwJTIwJTIwJTIwLiUyRmNvbmZpZ3VyZSUyMC0tcHJlZml4JTNEJTJGdXNyJTJGbG9jYWwlMkZtcGklMjAtLXdpdGgtY3VkYSUzRCUyRnVzciUyRmxvY2FsJTJGY3VkYSUyMC0td2l0aC1zbHVybSUyMCUyNiUyNiUyMCU1QyUwQSUyMCUyMCUyMCUyMG1ha2UlMjAtaiUyMGFsbCUyMCUyNiUyNiUyMCU1QyUwQSUyMCUyMCUyMCUyMG1ha2UlMjBpbnN0YWxsJTIwJTI2JTI2JTIwJTVDJTBBJTIwJTIwJTIwJTIwcm0lMjAtcmYlMjAlMjQlN0JPTVBJX1RBUkJBTExfRklMRU5BTUUlN0QlMkYuLiUwQSUwQSUyMyUyMEluc3RhbGwlMjBUZW5zb3JSVCUwQUZST00lMjBjdWRhLWJ1aWxkZXIlMjBBUyUyMHRydC1idWlsZGVyJTBBQ09QWSUyMGJhY2tlbmRzJTJGdHJ0bGxtJTJGc2NyaXB0cyUyRmluc3RhbGxfdGVuc29ycnQuc2glMjAlMkZvcHQlMkZpbnN0YWxsX3RlbnNvcnJ0LnNoJTBBUlVOJTIwY2htb2QlMjAlMkJ4JTIwJTJGb3B0JTJGaW5zdGFsbF90ZW5zb3JydC5zaCUyMCUyNiUyNiUyMCU1QyUwQSUyMCUyMCUyMCUyMCUyRm9wdCUyRmluc3RhbGxfdGVuc29ycnQuc2glMEElMEElMjMlMjBCdWlsZCUyMEJhY2tlbmQlMEFGUk9NJTIwY3VkYS1idWlsZGVyJTIwQVMlMjB0Z2ktYnVpbGRlciUwQVdPUktESVIlMjAlMkZ1c3IlMkZzcmMlMkZ0ZXh0LWdlbmVyYXRpb24taW5mZXJlbmNlJTBBJTBBJTIzJTIwU2NvcGVkJTIwZ2xvYmFsJTIwYXJncyUyMHJldXNlJTBBQVJHJTIwY3VkYV9hcmNoX2xpc3QlMEFBUkclMjBidWlsZF90eXBlJTBBQVJHJTIwc2NjYWNoZV9naGFfZW5hYmxlZCUwQUFSRyUyMGFjdGlvbnNfcmVzdWx0c191cmwlMEFBUkclMjBhY3Rpb25zX3J1bnRpbWVfdG9rZW4lMEElMEElMjMlMjBJbnN0YWxsJTIwUnVzdCUwQUVOViUyMFBBVEglM0QlMjIlMkZyb290JTJGLmNhcmdvJTJGYmluJTNBJTI0UEFUSCUyMiUwQVJVTiUyMGN1cmwlMjAtLXByb3RvJTIwJyUzRGh0dHBzJyUyMC0tdGxzdjEuMiUyMC1zU2YlMjBodHRwcyUzQSUyRiUyRnNoLnJ1c3R1cC5ycyUyMCU3QyUyMGJhc2glMjAtcyUyMC0tJTIwLXklMjAlMjYlMjYlMjAlNUMlMEElMjAlMjAlMjAlMjBjaG1vZCUyMC1SJTIwYSUyQnclMjAlMkZyb290JTJGLnJ1c3R1cCUyMCUyNiUyNiUyMCU1QyUwQSUyMCUyMCUyMCUyMGNobW9kJTIwLVIlMjBhJTJCdyUyMCUyRnJvb3QlMkYuY2FyZ28lMjAlMjYlMjYlMjAlNUMlMEElMjAlMjAlMjAlMjBjYXJnbyUyMGluc3RhbGwlMjBzY2NhY2hlJTIwLS12ZXJzaW9uJTIwJTIyJTNFJTNEMC4xMC4wJTIyJTIwLS1sb2NrZWQlMEElMEFFTlYlMjBMRF9MSUJSQVJZX1BBVEglM0QlMjIlMkZ1c3IlMkZsb2NhbCUyRm1waSUyRmxpYiUzQSUyNExEX0xJQlJBUllfUEFUSCUyMiUwQUVOViUyMFBLR19DT05GSUdfUEFUSCUzRCUyMiUyRnVzciUyRmxvY2FsJTJGbXBpJTJGbGliJTJGcGtnY29uZmlnJTIyJTBBRU5WJTIwQ01BS0VfUFJFRklYX1BBVEglM0QlMjIlMkZ1c3IlMkZsb2NhbCUyRm1waSUzQSUyRnVzciUyRmxvY2FsJTJGdGVuc29ycnQlMjIlMEElMEFFTlYlMjBVU0VfTExEX0xJTktFUiUzRE9OJTBBRU5WJTIwQ1VEQV9BUkNIX0xJU1QlM0QlMjQlN0JjdWRhX2FyY2hfbGlzdCU3RA==",highlighted:`<span class="hljs-keyword">ARG</span> cuda_arch_list=<span class="hljs-string">&quot;75-real;80-real;86-real;89-real;90-real&quot;</span>
<span class="hljs-keyword">ARG</span> build_type=release
<span class="hljs-keyword">ARG</span> ompi_version=<span class="hljs-number">4.1</span>.<span class="hljs-number">7</span>

<span class="hljs-comment"># CUDA dependent dependencies resolver stage</span>
<span class="hljs-keyword">FROM</span> nvidia/cuda:<span class="hljs-number">12.6</span>.<span class="hljs-number">3</span>-cudnn-devel-ubuntu24.<span class="hljs-number">04</span> AS cuda-builder

<span class="hljs-keyword">RUN</span><span class="language-bash"> apt-get update &amp;&amp; DEBIAN_FRONTEND=noninteractive apt-get install -y \\
    build-essential \\
    cmake \\
    curl \\
    gcc-14  \\
    g++-14 \\
    git \\
    git-lfs \\
    lld \\
    libssl-dev \\
    libucx-dev \\
    libasan8 \\
    libubsan1 \\
    ninja-build \\
    pkg-config \\
    pipx \\
    python3 \\
    python3-dev \\
    python3-setuptools \\
    tar \\
    wget --no-install-recommends &amp;&amp; \\
    pipx ensurepath</span>

<span class="hljs-keyword">ENV</span> TGI_INSTALL_PREFIX=/usr/local/tgi
<span class="hljs-keyword">ENV</span> TENSORRT_INSTALL_PREFIX=/usr/local/tensorrt

<span class="hljs-comment"># Install OpenMPI</span>
<span class="hljs-keyword">FROM</span> cuda-builder AS mpi-builder
<span class="hljs-keyword">WORKDIR</span><span class="language-bash"> /opt/src/mpi</span>

<span class="hljs-keyword">ARG</span> ompi_version
<span class="hljs-keyword">ENV</span> OMPI_VERSION=\${ompi_version}
<span class="hljs-keyword">ENV</span> OMPI_TARBALL_FILENAME=openmpi-\${OMPI_VERSION}.tar.bz2
<span class="hljs-keyword">ADD</span><span class="language-bash"> --checksum=sha256:54a33cb7ad81ff0976f15a6cc8003c3922f0f3d8ceed14e1813ef3603f22cd34 \\
    https://download.open-mpi.org/release/open-mpi/v4.1/<span class="hljs-variable">\${OMPI_TARBALL_FILENAME}</span> .</span>

<span class="hljs-keyword">RUN</span><span class="language-bash"> tar --strip-components=1 -xf <span class="hljs-variable">\${OMPI_TARBALL_FILENAME}</span> &amp;&amp;\\
    ./configure --prefix=/usr/local/mpi --with-cuda=/usr/local/cuda --with-slurm &amp;&amp; \\
    make -j all &amp;&amp; \\
    make install &amp;&amp; \\
    <span class="hljs-built_in">rm</span> -rf <span class="hljs-variable">\${OMPI_TARBALL_FILENAME}</span>/..</span>

<span class="hljs-comment"># Install TensorRT</span>
<span class="hljs-keyword">FROM</span> cuda-builder AS trt-builder
<span class="hljs-keyword">COPY</span><span class="language-bash"> backends/trtllm/scripts/install_tensorrt.sh /opt/install_tensorrt.sh</span>
<span class="hljs-keyword">RUN</span><span class="language-bash"> <span class="hljs-built_in">chmod</span> +x /opt/install_tensorrt.sh &amp;&amp; \\
    /opt/install_tensorrt.sh</span>

<span class="hljs-comment"># Build Backend</span>
<span class="hljs-keyword">FROM</span> cuda-builder AS tgi-builder
<span class="hljs-keyword">WORKDIR</span><span class="language-bash"> /usr/src/text-generation-inference</span>

<span class="hljs-comment"># Scoped global args reuse</span>
<span class="hljs-keyword">ARG</span> cuda_arch_list
<span class="hljs-keyword">ARG</span> build_type
<span class="hljs-keyword">ARG</span> sccache_gha_enabled
<span class="hljs-keyword">ARG</span> actions_results_url
<span class="hljs-keyword">ARG</span> actions_runtime_token

<span class="hljs-comment"># Install Rust</span>
<span class="hljs-keyword">ENV</span> PATH=<span class="hljs-string">&quot;/root/.cargo/bin:$PATH&quot;</span>
<span class="hljs-keyword">RUN</span><span class="language-bash"> curl --proto <span class="hljs-string">&#x27;=https&#x27;</span> --tlsv1.2 -sSf https://sh.rustup.rs | bash -s -- -y &amp;&amp; \\
    <span class="hljs-built_in">chmod</span> -R a+w /root/.rustup &amp;&amp; \\
    <span class="hljs-built_in">chmod</span> -R a+w /root/.cargo &amp;&amp; \\
    cargo install sccache --version <span class="hljs-string">&quot;&gt;=0.10.0&quot;</span> --locked</span>

<span class="hljs-keyword">ENV</span> LD_LIBRARY_PATH=<span class="hljs-string">&quot;/usr/local/mpi/lib:$LD_LIBRARY_PATH&quot;</span>
<span class="hljs-keyword">ENV</span> PKG_CONFIG_PATH=<span class="hljs-string">&quot;/usr/local/mpi/lib/pkgconfig&quot;</span>
<span class="hljs-keyword">ENV</span> CMAKE_PREFIX_PATH=<span class="hljs-string">&quot;/usr/local/mpi:/usr/local/tensorrt&quot;</span>

<span class="hljs-keyword">ENV</span> USE_LLD_LINKER=ON
<span class="hljs-keyword">ENV</span> CUDA_ARCH_LIST=\${cuda_arch_list}`,wrap:!1}}),g=new bl({props:{source:"https://github.com/huggingface/text-generation-inference/blob/main/docs/source/backends/trtllm.md"}}),{c(){o=M("meta"),L=t(),G=M("p"),W=t(),p(u.$$.fragment),F=t(),m=M("p"),m.textContent=pl,Y=t(),w=M("p"),w.innerHTML=Tl,x=t(),r=M("ul"),r.innerHTML=il,_=t(),p(h.$$.fragment),X=t(),I=M("p"),I.innerHTML=cl,$=t(),p(d.$$.fragment),v=t(),E=M("p"),E.innerHTML=Jl,z=t(),p(C.$$.fragment),D=t(),R=M("p"),R.innerHTML=yl,H=t(),p(b.$$.fragment),q=t(),N=M("p"),N.textContent=ol,O=t(),p(B.$$.fragment),P=t(),p(V.$$.fragment),K=t(),S=M("p"),S.innerHTML=jl,ll=t(),p(Q.$$.fragment),sl=t(),A=M("p"),A.innerHTML=ul,al=t(),p(k.$$.fragment),nl=t(),p(g.$$.fragment),tl=t(),Z=M("p"),this.h()},l(l){const s=Cl("svelte-u9bgzb",document.head);o=U(s,"META",{name:!0,content:!0}),s.forEach(a),L=e(l),G=U(l,"P",{}),ml(G).forEach(a),W=e(l),T(u.$$.fragment,l),F=e(l),m=U(l,"P",{"data-svelte-h":!0}),j(m)!=="svelte-epnzkj"&&(m.textContent=pl),Y=e(l),w=U(l,"P",{"data-svelte-h":!0}),j(w)!=="svelte-h0jye6"&&(w.innerHTML=Tl),x=e(l),r=U(l,"UL",{"data-svelte-h":!0}),j(r)!=="svelte-gs6pls"&&(r.innerHTML=il),_=e(l),T(h.$$.fragment,l),X=e(l),I=U(l,"P",{"data-svelte-h":!0}),j(I)!=="svelte-rn0qcd"&&(I.innerHTML=cl),$=e(l),T(d.$$.fragment,l),v=e(l),E=U(l,"P",{"data-svelte-h":!0}),j(E)!=="svelte-9xp6zc"&&(E.innerHTML=Jl),z=e(l),T(C.$$.fragment,l),D=e(l),R=U(l,"P",{"data-svelte-h":!0}),j(R)!=="svelte-1qoix0v"&&(R.innerHTML=yl),H=e(l),T(b.$$.fragment,l),q=e(l),N=U(l,"P",{"data-svelte-h":!0}),j(N)!=="svelte-1c6w5xw"&&(N.textContent=ol),O=e(l),T(B.$$.fragment,l),P=e(l),T(V.$$.fragment,l),K=e(l),S=U(l,"P",{"data-svelte-h":!0}),j(S)!=="svelte-r1k3z"&&(S.innerHTML=jl),ll=e(l),T(Q.$$.fragment,l),sl=e(l),A=U(l,"P",{"data-svelte-h":!0}),j(A)!=="svelte-owwd04"&&(A.innerHTML=ul),al=e(l),T(k.$$.fragment,l),nl=e(l),T(g.$$.fragment,l),tl=e(l),Z=U(l,"P",{}),ml(Z).forEach(a),this.h()},h(){wl(o,"name","hf:doc:metadata"),wl(o,"content",Bl)},m(l,s){Rl(document.head,o),n(l,L,s),n(l,G,s),n(l,W,s),i(u,l,s),n(l,F,s),n(l,m,s),n(l,Y,s),n(l,w,s),n(l,x,s),n(l,r,s),n(l,_,s),i(h,l,s),n(l,X,s),n(l,I,s),n(l,$,s),i(d,l,s),n(l,v,s),n(l,E,s),n(l,z,s),i(C,l,s),n(l,D,s),n(l,R,s),n(l,H,s),i(b,l,s),n(l,q,s),n(l,N,s),n(l,O,s),i(B,l,s),n(l,P,s),i(V,l,s),n(l,K,s),n(l,S,s),n(l,ll,s),i(Q,l,s),n(l,sl,s),n(l,A,s),n(l,al,s),i(k,l,s),n(l,nl,s),i(g,l,s),n(l,tl,s),n(l,Z,s),el=!0},p:hl,i(l){el||(c(u.$$.fragment,l),c(h.$$.fragment,l),c(d.$$.fragment,l),c(C.$$.fragment,l),c(b.$$.fragment,l),c(B.$$.fragment,l),c(V.$$.fragment,l),c(Q.$$.fragment,l),c(k.$$.fragment,l),c(g.$$.fragment,l),el=!0)},o(l){J(u.$$.fragment,l),J(h.$$.fragment,l),J(d.$$.fragment,l),J(C.$$.fragment,l),J(b.$$.fragment,l),J(B.$$.fragment,l),J(V.$$.fragment,l),J(Q.$$.fragment,l),J(k.$$.fragment,l),J(g.$$.fragment,l),el=!1},d(l){l&&(a(L),a(G),a(W),a(F),a(m),a(Y),a(w),a(x),a(r),a(_),a(X),a(I),a($),a(v),a(E),a(z),a(D),a(R),a(H),a(q),a(N),a(O),a(P),a(K),a(S),a(ll),a(sl),a(A),a(al),a(nl),a(tl),a(Z)),a(o),y(u,l),y(h,l),y(d,l),y(C,l),y(b,l),y(B,l),y(V,l),y(Q,l),y(k,l),y(g,l)}}}const Bl='{"title":"TensorRT-LLM backend","local":"tensorrt-llm-backend","sections":[{"title":"Supported models","local":"supported-models","sections":[],"depth":2},{"title":"Compiling engines","local":"compiling-engines","sections":[],"depth":2},{"title":"Using the TRTLLM backend","local":"using-the-trtllm-backend","sections":[],"depth":2},{"title":"Development","local":"development","sections":[],"depth":2}],"depth":1}';function Vl(Ul){return Il(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class gl extends dl{constructor(o){super(),El(this,o,Vl,Nl,rl,{})}}export{gl as component};
