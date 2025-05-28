import{s as mt,o as Mt,n as $}from"../chunks/scheduler.8c3d61f6.js";import{S as dt,i as ut,g as u,s as m,r as Z,A as yt,h as y,f as a,c as M,j as ct,u as B,x as f,k as Se,y as ht,a as n,v as I,d as _,t as C,w as g}from"../chunks/index.da70eac4.js";import{T as Ee}from"../chunks/Tip.1d9b8c37.js";import{C as F}from"../chunks/CodeBlock.a9c4becf.js";import{H as de,E as ft}from"../chunks/index.5d4ab994.js";import{H as xe,a as Y}from"../chunks/HfOption.6ab18950.js";function Jt(T){let t,c="For even faster inference with context parallelism, try using NVIDIA A100 or H100 GPUs (if available) with NVLink support, especially when there is a large number of GPUs.";return{c(){t=u("p"),t.textContent=c},l(s){t=y(s,"P",{"data-svelte-h":!0}),f(t)!=="svelte-jwcben"&&(t.textContent=c)},m(s,o){n(s,t,o)},p:$,d(s){s&&a(t)}}}function wt(T){let t,c="To apply first block cache on FLUX.1-dev, call <code>apply_cache_on_pipe</code> as shown below. 0.08 is the default residual difference value for FLUX models.",s,o,l,p,J='<thead><tr><th>Optimizations</th> <th>Original</th> <th>FBCache rdt=0.06</th> <th>FBCache rdt=0.08</th> <th>FBCache rdt=0.10</th> <th>FBCache rdt=0.12</th></tr></thead> <tbody><tr><td>Preview</td> <td><img src="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/diffusers/para-attn/flux-original.png" alt="Original"/></td> <td><img src="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/diffusers/para-attn/flux-fbc-0.06.png" alt="FBCache rdt=0.06"/></td> <td><img src="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/diffusers/para-attn/flux-fbc-0.08.png" alt="FBCache rdt=0.08"/></td> <td><img src="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/diffusers/para-attn/flux-fbc-0.10.png" alt="FBCache rdt=0.10"/></td> <td><img src="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/diffusers/para-attn/flux-fbc-0.12.png" alt="FBCache rdt=0.12"/></td></tr> <tr><td>Wall Time (s)</td> <td>26.36</td> <td>21.83</td> <td>17.01</td> <td>16.00</td> <td>13.78</td></tr></tbody>',w,d,U="First Block Cache reduced the inference speed to 17.01 seconds compared to the baseline, or 1.55x faster, while maintaining nearly zero quality loss.",G;return o=new F({props:{code:"aW1wb3J0JTIwdGltZSUwQWltcG9ydCUyMHRvcmNoJTBBZnJvbSUyMGRpZmZ1c2VycyUyMGltcG9ydCUyMEZsdXhQaXBlbGluZSUwQSUwQXBpcGUlMjAlM0QlMjBGbHV4UGlwZWxpbmUuZnJvbV9wcmV0cmFpbmVkKCUwQSUyMCUyMCUyMCUyMCUyMmJsYWNrLWZvcmVzdC1sYWJzJTJGRkxVWC4xLWRldiUyMiUyQyUwQSUyMCUyMCUyMCUyMHRvcmNoX2R0eXBlJTNEdG9yY2guYmZsb2F0MTYlMkMlMEEpLnRvKCUyMmN1ZGElMjIpJTBBJTBBZnJvbSUyMHBhcmFfYXR0bi5maXJzdF9ibG9ja19jYWNoZS5kaWZmdXNlcnNfYWRhcHRlcnMlMjBpbXBvcnQlMjBhcHBseV9jYWNoZV9vbl9waXBlJTBBJTBBYXBwbHlfY2FjaGVfb25fcGlwZShwaXBlJTJDJTIwcmVzaWR1YWxfZGlmZl90aHJlc2hvbGQlM0QwLjA4KSUwQSUwQSUyMyUyMEVuYWJsZSUyMG1lbW9yeSUyMHNhdmluZ3MlMEElMjMlMjBwaXBlLmVuYWJsZV9tb2RlbF9jcHVfb2ZmbG9hZCgpJTBBJTIzJTIwcGlwZS5lbmFibGVfc2VxdWVudGlhbF9jcHVfb2ZmbG9hZCgpJTBBJTBBYmVnaW4lMjAlM0QlMjB0aW1lLnRpbWUoKSUwQWltYWdlJTIwJTNEJTIwcGlwZSglMEElMjAlMjAlMjAlMjAlMjJBJTIwY2F0JTIwaG9sZGluZyUyMGElMjBzaWduJTIwdGhhdCUyMHNheXMlMjBoZWxsbyUyMHdvcmxkJTIyJTJDJTBBJTIwJTIwJTIwJTIwbnVtX2luZmVyZW5jZV9zdGVwcyUzRDI4JTJDJTBBKS5pbWFnZXMlNUIwJTVEJTBBZW5kJTIwJTNEJTIwdGltZS50aW1lKCklMEFwcmludChmJTIyVGltZSUzQSUyMCU3QmVuZCUyMC0lMjBiZWdpbiUzQS4yZiU3RHMlMjIpJTBBJTBBcHJpbnQoJTIyU2F2aW5nJTIwaW1hZ2UlMjB0byUyMGZsdXgucG5nJTIyKSUwQWltYWdlLnNhdmUoJTIyZmx1eC5wbmclMjIp",highlighted:`<span class="hljs-keyword">import</span> time
<span class="hljs-keyword">import</span> torch
<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> FluxPipeline

pipe = FluxPipeline.from_pretrained(
    <span class="hljs-string">&quot;black-forest-labs/FLUX.1-dev&quot;</span>,
    torch_dtype=torch.bfloat16,
).to(<span class="hljs-string">&quot;cuda&quot;</span>)

<span class="hljs-keyword">from</span> para_attn.first_block_cache.diffusers_adapters <span class="hljs-keyword">import</span> apply_cache_on_pipe

apply_cache_on_pipe(pipe, residual_diff_threshold=<span class="hljs-number">0.08</span>)

<span class="hljs-comment"># Enable memory savings</span>
<span class="hljs-comment"># pipe.enable_model_cpu_offload()</span>
<span class="hljs-comment"># pipe.enable_sequential_cpu_offload()</span>

begin = time.time()
image = pipe(
    <span class="hljs-string">&quot;A cat holding a sign that says hello world&quot;</span>,
    num_inference_steps=<span class="hljs-number">28</span>,
).images[<span class="hljs-number">0</span>]
end = time.time()
<span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;Time: <span class="hljs-subst">{end - begin:<span class="hljs-number">.2</span>f}</span>s&quot;</span>)

<span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Saving image to flux.png&quot;</span>)
image.save(<span class="hljs-string">&quot;flux.png&quot;</span>)`,wrap:!1}}),{c(){t=u("p"),t.innerHTML=c,s=m(),Z(o.$$.fragment),l=m(),p=u("table"),p.innerHTML=J,w=m(),d=u("p"),d.textContent=U},l(h){t=y(h,"P",{"data-svelte-h":!0}),f(t)!=="svelte-1gztnit"&&(t.innerHTML=c),s=M(h),B(o.$$.fragment,h),l=M(h),p=y(h,"TABLE",{"data-svelte-h":!0}),f(p)!=="svelte-oatp7r"&&(p.innerHTML=J),w=M(h),d=y(h,"P",{"data-svelte-h":!0}),f(d)!=="svelte-1igi2g7"&&(d.textContent=U)},m(h,W){n(h,t,W),n(h,s,W),I(o,h,W),n(h,l,W),n(h,p,W),n(h,w,W),n(h,d,W),G=!0},p:$,i(h){G||(_(o.$$.fragment,h),G=!0)},o(h){C(o.$$.fragment,h),G=!1},d(h){h&&(a(t),a(s),a(l),a(p),a(w),a(d)),g(o,h)}}}function jt(T){let t,c="To apply First Block Cache on HunyuanVideo, <code>apply_cache_on_pipe</code> as shown below. 0.06 is the default residual difference value for HunyuanVideo models.",s,o,l,p,J=`<source src="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/diffusers/para-attn/hunyuan-video-original.mp4" type="video/mp4"/>
  Your browser does not support the video tag.`,w,d,U="HunyuanVideo without FBCache",G,h,W=`<source src="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/diffusers/para-attn/hunyuan-video-fbc.mp4" type="video/mp4"/>
  Your browser does not support the video tag.`,r,b,X="HunyuanVideo with FBCache",N,V,k="First Block Cache reduced the inference speed to 2271.06 seconds compared to the baseline, or 1.62x faster, while maintaining nearly zero quality loss.",z;return o=new F({props:{code:"aW1wb3J0JTIwdGltZSUwQWltcG9ydCUyMHRvcmNoJTBBZnJvbSUyMGRpZmZ1c2VycyUyMGltcG9ydCUyMEh1bnl1YW5WaWRlb1BpcGVsaW5lJTJDJTIwSHVueXVhblZpZGVvVHJhbnNmb3JtZXIzRE1vZGVsJTBBZnJvbSUyMGRpZmZ1c2Vycy51dGlscyUyMGltcG9ydCUyMGV4cG9ydF90b192aWRlbyUwQSUwQW1vZGVsX2lkJTIwJTNEJTIwJTIydGVuY2VudCUyRkh1bnl1YW5WaWRlbyUyMiUwQXRyYW5zZm9ybWVyJTIwJTNEJTIwSHVueXVhblZpZGVvVHJhbnNmb3JtZXIzRE1vZGVsLmZyb21fcHJldHJhaW5lZCglMEElMjAlMjAlMjAlMjBtb2RlbF9pZCUyQyUwQSUyMCUyMCUyMCUyMHN1YmZvbGRlciUzRCUyMnRyYW5zZm9ybWVyJTIyJTJDJTBBJTIwJTIwJTIwJTIwdG9yY2hfZHR5cGUlM0R0b3JjaC5iZmxvYXQxNiUyQyUwQSUyMCUyMCUyMCUyMHJldmlzaW9uJTNEJTIycmVmcyUyRnByJTJGMTglMjIlMkMlMEEpJTBBcGlwZSUyMCUzRCUyMEh1bnl1YW5WaWRlb1BpcGVsaW5lLmZyb21fcHJldHJhaW5lZCglMEElMjAlMjAlMjAlMjBtb2RlbF9pZCUyQyUwQSUyMCUyMCUyMCUyMHRyYW5zZm9ybWVyJTNEdHJhbnNmb3JtZXIlMkMlMEElMjAlMjAlMjAlMjB0b3JjaF9kdHlwZSUzRHRvcmNoLmZsb2F0MTYlMkMlMEElMjAlMjAlMjAlMjByZXZpc2lvbiUzRCUyMnJlZnMlMkZwciUyRjE4JTIyJTJDJTBBKS50byglMjJjdWRhJTIyKSUwQSUwQWZyb20lMjBwYXJhX2F0dG4uZmlyc3RfYmxvY2tfY2FjaGUuZGlmZnVzZXJzX2FkYXB0ZXJzJTIwaW1wb3J0JTIwYXBwbHlfY2FjaGVfb25fcGlwZSUwQSUwQWFwcGx5X2NhY2hlX29uX3BpcGUocGlwZSUyQyUyMHJlc2lkdWFsX2RpZmZfdGhyZXNob2xkJTNEMC42KSUwQSUwQXBpcGUudmFlLmVuYWJsZV90aWxpbmcoKSUwQSUwQWJlZ2luJTIwJTNEJTIwdGltZS50aW1lKCklMEFvdXRwdXQlMjAlM0QlMjBwaXBlKCUwQSUyMCUyMCUyMCUyMHByb21wdCUzRCUyMkElMjBjYXQlMjB3YWxrcyUyMG9uJTIwdGhlJTIwZ3Jhc3MlMkMlMjByZWFsaXN0aWMlMjIlMkMlMEElMjAlMjAlMjAlMjBoZWlnaHQlM0Q3MjAlMkMlMEElMjAlMjAlMjAlMjB3aWR0aCUzRDEyODAlMkMlMEElMjAlMjAlMjAlMjBudW1fZnJhbWVzJTNEMTI5JTJDJTBBJTIwJTIwJTIwJTIwbnVtX2luZmVyZW5jZV9zdGVwcyUzRDMwJTJDJTBBKS5mcmFtZXMlNUIwJTVEJTBBZW5kJTIwJTNEJTIwdGltZS50aW1lKCklMEFwcmludChmJTIyVGltZSUzQSUyMCU3QmVuZCUyMC0lMjBiZWdpbiUzQS4yZiU3RHMlMjIpJTBBJTBBcHJpbnQoJTIyU2F2aW5nJTIwdmlkZW8lMjB0byUyMGh1bnl1YW5fdmlkZW8ubXA0JTIyKSUwQWV4cG9ydF90b192aWRlbyhvdXRwdXQlMkMlMjAlMjJodW55dWFuX3ZpZGVvLm1wNCUyMiUyQyUyMGZwcyUzRDE1KQ==",highlighted:`<span class="hljs-keyword">import</span> time
<span class="hljs-keyword">import</span> torch
<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> HunyuanVideoPipeline, HunyuanVideoTransformer3DModel
<span class="hljs-keyword">from</span> diffusers.utils <span class="hljs-keyword">import</span> export_to_video

model_id = <span class="hljs-string">&quot;tencent/HunyuanVideo&quot;</span>
transformer = HunyuanVideoTransformer3DModel.from_pretrained(
    model_id,
    subfolder=<span class="hljs-string">&quot;transformer&quot;</span>,
    torch_dtype=torch.bfloat16,
    revision=<span class="hljs-string">&quot;refs/pr/18&quot;</span>,
)
pipe = HunyuanVideoPipeline.from_pretrained(
    model_id,
    transformer=transformer,
    torch_dtype=torch.float16,
    revision=<span class="hljs-string">&quot;refs/pr/18&quot;</span>,
).to(<span class="hljs-string">&quot;cuda&quot;</span>)

<span class="hljs-keyword">from</span> para_attn.first_block_cache.diffusers_adapters <span class="hljs-keyword">import</span> apply_cache_on_pipe

apply_cache_on_pipe(pipe, residual_diff_threshold=<span class="hljs-number">0.6</span>)

pipe.vae.enable_tiling()

begin = time.time()
output = pipe(
    prompt=<span class="hljs-string">&quot;A cat walks on the grass, realistic&quot;</span>,
    height=<span class="hljs-number">720</span>,
    width=<span class="hljs-number">1280</span>,
    num_frames=<span class="hljs-number">129</span>,
    num_inference_steps=<span class="hljs-number">30</span>,
).frames[<span class="hljs-number">0</span>]
end = time.time()
<span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;Time: <span class="hljs-subst">{end - begin:<span class="hljs-number">.2</span>f}</span>s&quot;</span>)

<span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Saving video to hunyuan_video.mp4&quot;</span>)
export_to_video(output, <span class="hljs-string">&quot;hunyuan_video.mp4&quot;</span>, fps=<span class="hljs-number">15</span>)`,wrap:!1}}),{c(){t=u("p"),t.innerHTML=c,s=m(),Z(o.$$.fragment),l=m(),p=u("video"),p.innerHTML=J,w=m(),d=u("small"),d.textContent=U,G=m(),h=u("video"),h.innerHTML=W,r=m(),b=u("small"),b.textContent=X,N=m(),V=u("p"),V.textContent=k,this.h()},l(j){t=y(j,"P",{"data-svelte-h":!0}),f(t)!=="svelte-ijrywe"&&(t.innerHTML=c),s=M(j),B(o.$$.fragment,j),l=M(j),p=y(j,"VIDEO",{"data-svelte-h":!0}),f(p)!=="svelte-o0uc7b"&&(p.innerHTML=J),w=M(j),d=y(j,"SMALL",{"data-svelte-h":!0}),f(d)!=="svelte-1m2snav"&&(d.textContent=U),G=M(j),h=y(j,"VIDEO",{"data-svelte-h":!0}),f(h)!=="svelte-1lwel73"&&(h.innerHTML=W),r=M(j),b=y(j,"SMALL",{"data-svelte-h":!0}),f(b)!=="svelte-8iknyh"&&(b.textContent=X),N=M(j),V=y(j,"P",{"data-svelte-h":!0}),f(V)!=="svelte-1ufkyta"&&(V.textContent=k),this.h()},h(){p.controls="",h.controls=""},m(j,v){n(j,t,v),n(j,s,v),I(o,j,v),n(j,l,v),n(j,p,v),n(j,w,v),n(j,d,v),n(j,G,v),n(j,h,v),n(j,r,v),n(j,b,v),n(j,N,v),n(j,V,v),z=!0},p:$,i(j){z||(_(o.$$.fragment,j),z=!0)},o(j){C(o.$$.fragment,j),z=!1},d(j){j&&(a(t),a(s),a(l),a(p),a(w),a(d),a(G),a(h),a(r),a(b),a(N),a(V)),g(o,j)}}}function Tt(T){let t,c,s,o;return t=new Y({props:{id:"first-block-cache",option:"FLUX-1.dev",$$slots:{default:[wt]},$$scope:{ctx:T}}}),s=new Y({props:{id:"first-block-cache",option:"HunyuanVideo",$$slots:{default:[jt]},$$scope:{ctx:T}}}),{c(){Z(t.$$.fragment),c=m(),Z(s.$$.fragment)},l(l){B(t.$$.fragment,l),c=M(l),B(s.$$.fragment,l)},m(l,p){I(t,l,p),n(l,c,p),I(s,l,p),o=!0},p(l,p){const J={};p&2&&(J.$$scope={dirty:p,ctx:l}),t.$set(J);const w={};p&2&&(w.$$scope={dirty:p,ctx:l}),s.$set(w)},i(l){o||(_(t.$$.fragment,l),_(s.$$.fragment,l),o=!0)},o(l){C(t.$$.fragment,l),C(s.$$.fragment,l),o=!1},d(l){l&&a(c),g(t,l),g(s,l)}}}function bt(T){let t,c="Dynamic quantization can significantly change the distribution of the model output, so you need to change the <code>residual_diff_threshold</code> to a larger value for it to take effect.";return{c(){t=u("p"),t.innerHTML=c},l(s){t=y(s,"P",{"data-svelte-h":!0}),f(t)!=="svelte-12j2yep"&&(t.innerHTML=c)},m(s,o){n(s,t,o)},p:$,d(s){s&&a(t)}}}function Ut(T){let t,c,s,o="fp8 dynamic quantization and torch.compile reduced the inference speed to 7.56 seconds compared to the baseline, or 3.48x faster.",l;return t=new F({props:{code:"aW1wb3J0JTIwdGltZSUwQWltcG9ydCUyMHRvcmNoJTBBZnJvbSUyMGRpZmZ1c2VycyUyMGltcG9ydCUyMEZsdXhQaXBlbGluZSUwQSUwQXBpcGUlMjAlM0QlMjBGbHV4UGlwZWxpbmUuZnJvbV9wcmV0cmFpbmVkKCUwQSUyMCUyMCUyMCUyMCUyMmJsYWNrLWZvcmVzdC1sYWJzJTJGRkxVWC4xLWRldiUyMiUyQyUwQSUyMCUyMCUyMCUyMHRvcmNoX2R0eXBlJTNEdG9yY2guYmZsb2F0MTYlMkMlMEEpLnRvKCUyMmN1ZGElMjIpJTBBJTBBZnJvbSUyMHBhcmFfYXR0bi5maXJzdF9ibG9ja19jYWNoZS5kaWZmdXNlcnNfYWRhcHRlcnMlMjBpbXBvcnQlMjBhcHBseV9jYWNoZV9vbl9waXBlJTBBJTBBYXBwbHlfY2FjaGVfb25fcGlwZSglMEElMjAlMjAlMjAlMjBwaXBlJTJDJTBBJTIwJTIwJTIwJTIwcmVzaWR1YWxfZGlmZl90aHJlc2hvbGQlM0QwLjEyJTJDJTIwJTIwJTIzJTIwVXNlJTIwYSUyMGxhcmdlciUyMHZhbHVlJTIwdG8lMjBtYWtlJTIwdGhlJTIwY2FjaGUlMjB0YWtlJTIwZWZmZWN0JTBBKSUwQSUwQWZyb20lMjB0b3JjaGFvLnF1YW50aXphdGlvbiUyMGltcG9ydCUyMHF1YW50aXplXyUyQyUyMGZsb2F0OF9keW5hbWljX2FjdGl2YXRpb25fZmxvYXQ4X3dlaWdodCUyQyUyMGZsb2F0OF93ZWlnaHRfb25seSUwQSUwQXF1YW50aXplXyhwaXBlLnRleHRfZW5jb2RlciUyQyUyMGZsb2F0OF93ZWlnaHRfb25seSgpKSUwQXF1YW50aXplXyhwaXBlLnRyYW5zZm9ybWVyJTJDJTIwZmxvYXQ4X2R5bmFtaWNfYWN0aXZhdGlvbl9mbG9hdDhfd2VpZ2h0KCkpJTBBcGlwZS50cmFuc2Zvcm1lciUyMCUzRCUyMHRvcmNoLmNvbXBpbGUoJTBBJTIwJTIwJTIwcGlwZS50cmFuc2Zvcm1lciUyQyUyMG1vZGUlM0QlMjJtYXgtYXV0b3R1bmUtbm8tY3VkYWdyYXBocyUyMiUyQyUwQSklMEElMEElMjMlMjBFbmFibGUlMjBtZW1vcnklMjBzYXZpbmdzJTBBJTIzJTIwcGlwZS5lbmFibGVfbW9kZWxfY3B1X29mZmxvYWQoKSUwQSUyMyUyMHBpcGUuZW5hYmxlX3NlcXVlbnRpYWxfY3B1X29mZmxvYWQoKSUwQSUwQWZvciUyMGklMjBpbiUyMHJhbmdlKDIpJTNBJTBBJTIwJTIwJTIwJTIwYmVnaW4lMjAlM0QlMjB0aW1lLnRpbWUoKSUwQSUyMCUyMCUyMCUyMGltYWdlJTIwJTNEJTIwcGlwZSglMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjJBJTIwY2F0JTIwaG9sZGluZyUyMGElMjBzaWduJTIwdGhhdCUyMHNheXMlMjBoZWxsbyUyMHdvcmxkJTIyJTJDJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwbnVtX2luZmVyZW5jZV9zdGVwcyUzRDI4JTJDJTBBJTIwJTIwJTIwJTIwKS5pbWFnZXMlNUIwJTVEJTBBJTIwJTIwJTIwJTIwZW5kJTIwJTNEJTIwdGltZS50aW1lKCklMEElMjAlMjAlMjAlMjBpZiUyMGklMjAlM0QlM0QlMjAwJTNBJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwcHJpbnQoZiUyMldhcm0lMjB1cCUyMHRpbWUlM0ElMjAlN0JlbmQlMjAtJTIwYmVnaW4lM0EuMmYlN0RzJTIyKSUwQSUyMCUyMCUyMCUyMGVsc2UlM0ElMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBwcmludChmJTIyVGltZSUzQSUyMCU3QmVuZCUyMC0lMjBiZWdpbiUzQS4yZiU3RHMlMjIpJTBBJTBBcHJpbnQoJTIyU2F2aW5nJTIwaW1hZ2UlMjB0byUyMGZsdXgucG5nJTIyKSUwQWltYWdlLnNhdmUoJTIyZmx1eC5wbmclMjIp",highlighted:`<span class="hljs-keyword">import</span> time
<span class="hljs-keyword">import</span> torch
<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> FluxPipeline

pipe = FluxPipeline.from_pretrained(
    <span class="hljs-string">&quot;black-forest-labs/FLUX.1-dev&quot;</span>,
    torch_dtype=torch.bfloat16,
).to(<span class="hljs-string">&quot;cuda&quot;</span>)

<span class="hljs-keyword">from</span> para_attn.first_block_cache.diffusers_adapters <span class="hljs-keyword">import</span> apply_cache_on_pipe

apply_cache_on_pipe(
    pipe,
    residual_diff_threshold=<span class="hljs-number">0.12</span>,  <span class="hljs-comment"># Use a larger value to make the cache take effect</span>
)

<span class="hljs-keyword">from</span> torchao.quantization <span class="hljs-keyword">import</span> quantize_, float8_dynamic_activation_float8_weight, float8_weight_only

quantize_(pipe.text_encoder, float8_weight_only())
quantize_(pipe.transformer, float8_dynamic_activation_float8_weight())
pipe.transformer = torch.<span class="hljs-built_in">compile</span>(
   pipe.transformer, mode=<span class="hljs-string">&quot;max-autotune-no-cudagraphs&quot;</span>,
)

<span class="hljs-comment"># Enable memory savings</span>
<span class="hljs-comment"># pipe.enable_model_cpu_offload()</span>
<span class="hljs-comment"># pipe.enable_sequential_cpu_offload()</span>

<span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">2</span>):
    begin = time.time()
    image = pipe(
        <span class="hljs-string">&quot;A cat holding a sign that says hello world&quot;</span>,
        num_inference_steps=<span class="hljs-number">28</span>,
    ).images[<span class="hljs-number">0</span>]
    end = time.time()
    <span class="hljs-keyword">if</span> i == <span class="hljs-number">0</span>:
        <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;Warm up time: <span class="hljs-subst">{end - begin:<span class="hljs-number">.2</span>f}</span>s&quot;</span>)
    <span class="hljs-keyword">else</span>:
        <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;Time: <span class="hljs-subst">{end - begin:<span class="hljs-number">.2</span>f}</span>s&quot;</span>)

<span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Saving image to flux.png&quot;</span>)
image.save(<span class="hljs-string">&quot;flux.png&quot;</span>)`,wrap:!1}}),{c(){Z(t.$$.fragment),c=m(),s=u("p"),s.textContent=o},l(p){B(t.$$.fragment,p),c=M(p),s=y(p,"P",{"data-svelte-h":!0}),f(s)!=="svelte-2k6y70"&&(s.textContent=o)},m(p,J){I(t,p,J),n(p,c,J),n(p,s,J),l=!0},p:$,i(p){l||(_(t.$$.fragment,p),l=!0)},o(p){C(t.$$.fragment,p),l=!1},d(p){p&&(a(c),a(s)),g(t,p)}}}function Zt(T){let t,c,s,o="A NVIDIA L20 GPU only has 48GB memory and could face out-of-memory (OOM) errors after compilation and if <code>enable_model_cpu_offload</code> isn’t called because HunyuanVideo has very large activation tensors when running with high resolution and large number of frames. For GPUs with less than 80GB of memory, you can try reducing the resolution and number of frames to avoid OOM errors.",l,p,J="Large video generation models are usually bottlenecked by the attention computations rather than the fully connected layers. These models don’t significantly benefit from quantization and torch.compile.",w;return t=new F({props:{code:"aW1wb3J0JTIwdGltZSUwQWltcG9ydCUyMHRvcmNoJTBBZnJvbSUyMGRpZmZ1c2VycyUyMGltcG9ydCUyMEh1bnl1YW5WaWRlb1BpcGVsaW5lJTJDJTIwSHVueXVhblZpZGVvVHJhbnNmb3JtZXIzRE1vZGVsJTBBZnJvbSUyMGRpZmZ1c2Vycy51dGlscyUyMGltcG9ydCUyMGV4cG9ydF90b192aWRlbyUwQSUwQW1vZGVsX2lkJTIwJTNEJTIwJTIydGVuY2VudCUyRkh1bnl1YW5WaWRlbyUyMiUwQXRyYW5zZm9ybWVyJTIwJTNEJTIwSHVueXVhblZpZGVvVHJhbnNmb3JtZXIzRE1vZGVsLmZyb21fcHJldHJhaW5lZCglMEElMjAlMjAlMjAlMjBtb2RlbF9pZCUyQyUwQSUyMCUyMCUyMCUyMHN1YmZvbGRlciUzRCUyMnRyYW5zZm9ybWVyJTIyJTJDJTBBJTIwJTIwJTIwJTIwdG9yY2hfZHR5cGUlM0R0b3JjaC5iZmxvYXQxNiUyQyUwQSUyMCUyMCUyMCUyMHJldmlzaW9uJTNEJTIycmVmcyUyRnByJTJGMTglMjIlMkMlMEEpJTBBcGlwZSUyMCUzRCUyMEh1bnl1YW5WaWRlb1BpcGVsaW5lLmZyb21fcHJldHJhaW5lZCglMEElMjAlMjAlMjAlMjBtb2RlbF9pZCUyQyUwQSUyMCUyMCUyMCUyMHRyYW5zZm9ybWVyJTNEdHJhbnNmb3JtZXIlMkMlMEElMjAlMjAlMjAlMjB0b3JjaF9kdHlwZSUzRHRvcmNoLmZsb2F0MTYlMkMlMEElMjAlMjAlMjAlMjByZXZpc2lvbiUzRCUyMnJlZnMlMkZwciUyRjE4JTIyJTJDJTBBKS50byglMjJjdWRhJTIyKSUwQSUwQWZyb20lMjBwYXJhX2F0dG4uZmlyc3RfYmxvY2tfY2FjaGUuZGlmZnVzZXJzX2FkYXB0ZXJzJTIwaW1wb3J0JTIwYXBwbHlfY2FjaGVfb25fcGlwZSUwQSUwQWFwcGx5X2NhY2hlX29uX3BpcGUocGlwZSklMEElMEFmcm9tJTIwdG9yY2hhby5xdWFudGl6YXRpb24lMjBpbXBvcnQlMjBxdWFudGl6ZV8lMkMlMjBmbG9hdDhfZHluYW1pY19hY3RpdmF0aW9uX2Zsb2F0OF93ZWlnaHQlMkMlMjBmbG9hdDhfd2VpZ2h0X29ubHklMEElMEFxdWFudGl6ZV8ocGlwZS50ZXh0X2VuY29kZXIlMkMlMjBmbG9hdDhfd2VpZ2h0X29ubHkoKSklMEFxdWFudGl6ZV8ocGlwZS50cmFuc2Zvcm1lciUyQyUyMGZsb2F0OF9keW5hbWljX2FjdGl2YXRpb25fZmxvYXQ4X3dlaWdodCgpKSUwQXBpcGUudHJhbnNmb3JtZXIlMjAlM0QlMjB0b3JjaC5jb21waWxlKCUwQSUyMCUyMCUyMHBpcGUudHJhbnNmb3JtZXIlMkMlMjBtb2RlJTNEJTIybWF4LWF1dG90dW5lLW5vLWN1ZGFncmFwaHMlMjIlMkMlMEEpJTBBJTBBJTIzJTIwRW5hYmxlJTIwbWVtb3J5JTIwc2F2aW5ncyUwQXBpcGUudmFlLmVuYWJsZV90aWxpbmcoKSUwQSUyMyUyMHBpcGUuZW5hYmxlX21vZGVsX2NwdV9vZmZsb2FkKCklMEElMjMlMjBwaXBlLmVuYWJsZV9zZXF1ZW50aWFsX2NwdV9vZmZsb2FkKCklMEElMEFmb3IlMjBpJTIwaW4lMjByYW5nZSgyKSUzQSUwQSUyMCUyMCUyMCUyMGJlZ2luJTIwJTNEJTIwdGltZS50aW1lKCklMEElMjAlMjAlMjAlMjBvdXRwdXQlMjAlM0QlMjBwaXBlKCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMHByb21wdCUzRCUyMkElMjBjYXQlMjB3YWxrcyUyMG9uJTIwdGhlJTIwZ3Jhc3MlMkMlMjByZWFsaXN0aWMlMjIlMkMlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBoZWlnaHQlM0Q3MjAlMkMlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjB3aWR0aCUzRDEyODAlMkMlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBudW1fZnJhbWVzJTNEMTI5JTJDJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwbnVtX2luZmVyZW5jZV9zdGVwcyUzRDElMjBpZiUyMGklMjAlM0QlM0QlMjAwJTIwZWxzZSUyMDMwJTJDJTBBJTIwJTIwJTIwJTIwKS5mcmFtZXMlNUIwJTVEJTBBJTIwJTIwJTIwJTIwZW5kJTIwJTNEJTIwdGltZS50aW1lKCklMEElMjAlMjAlMjAlMjBpZiUyMGklMjAlM0QlM0QlMjAwJTNBJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwcHJpbnQoZiUyMldhcm0lMjB1cCUyMHRpbWUlM0ElMjAlN0JlbmQlMjAtJTIwYmVnaW4lM0EuMmYlN0RzJTIyKSUwQSUyMCUyMCUyMCUyMGVsc2UlM0ElMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBwcmludChmJTIyVGltZSUzQSUyMCU3QmVuZCUyMC0lMjBiZWdpbiUzQS4yZiU3RHMlMjIpJTBBJTBBcHJpbnQoJTIyU2F2aW5nJTIwdmlkZW8lMjB0byUyMGh1bnl1YW5fdmlkZW8ubXA0JTIyKSUwQWV4cG9ydF90b192aWRlbyhvdXRwdXQlMkMlMjAlMjJodW55dWFuX3ZpZGVvLm1wNCUyMiUyQyUyMGZwcyUzRDE1KQ==",highlighted:`<span class="hljs-keyword">import</span> time
<span class="hljs-keyword">import</span> torch
<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> HunyuanVideoPipeline, HunyuanVideoTransformer3DModel
<span class="hljs-keyword">from</span> diffusers.utils <span class="hljs-keyword">import</span> export_to_video

model_id = <span class="hljs-string">&quot;tencent/HunyuanVideo&quot;</span>
transformer = HunyuanVideoTransformer3DModel.from_pretrained(
    model_id,
    subfolder=<span class="hljs-string">&quot;transformer&quot;</span>,
    torch_dtype=torch.bfloat16,
    revision=<span class="hljs-string">&quot;refs/pr/18&quot;</span>,
)
pipe = HunyuanVideoPipeline.from_pretrained(
    model_id,
    transformer=transformer,
    torch_dtype=torch.float16,
    revision=<span class="hljs-string">&quot;refs/pr/18&quot;</span>,
).to(<span class="hljs-string">&quot;cuda&quot;</span>)

<span class="hljs-keyword">from</span> para_attn.first_block_cache.diffusers_adapters <span class="hljs-keyword">import</span> apply_cache_on_pipe

apply_cache_on_pipe(pipe)

<span class="hljs-keyword">from</span> torchao.quantization <span class="hljs-keyword">import</span> quantize_, float8_dynamic_activation_float8_weight, float8_weight_only

quantize_(pipe.text_encoder, float8_weight_only())
quantize_(pipe.transformer, float8_dynamic_activation_float8_weight())
pipe.transformer = torch.<span class="hljs-built_in">compile</span>(
   pipe.transformer, mode=<span class="hljs-string">&quot;max-autotune-no-cudagraphs&quot;</span>,
)

<span class="hljs-comment"># Enable memory savings</span>
pipe.vae.enable_tiling()
<span class="hljs-comment"># pipe.enable_model_cpu_offload()</span>
<span class="hljs-comment"># pipe.enable_sequential_cpu_offload()</span>

<span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">2</span>):
    begin = time.time()
    output = pipe(
        prompt=<span class="hljs-string">&quot;A cat walks on the grass, realistic&quot;</span>,
        height=<span class="hljs-number">720</span>,
        width=<span class="hljs-number">1280</span>,
        num_frames=<span class="hljs-number">129</span>,
        num_inference_steps=<span class="hljs-number">1</span> <span class="hljs-keyword">if</span> i == <span class="hljs-number">0</span> <span class="hljs-keyword">else</span> <span class="hljs-number">30</span>,
    ).frames[<span class="hljs-number">0</span>]
    end = time.time()
    <span class="hljs-keyword">if</span> i == <span class="hljs-number">0</span>:
        <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;Warm up time: <span class="hljs-subst">{end - begin:<span class="hljs-number">.2</span>f}</span>s&quot;</span>)
    <span class="hljs-keyword">else</span>:
        <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;Time: <span class="hljs-subst">{end - begin:<span class="hljs-number">.2</span>f}</span>s&quot;</span>)

<span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Saving video to hunyuan_video.mp4&quot;</span>)
export_to_video(output, <span class="hljs-string">&quot;hunyuan_video.mp4&quot;</span>, fps=<span class="hljs-number">15</span>)`,wrap:!1}}),{c(){Z(t.$$.fragment),c=m(),s=u("p"),s.innerHTML=o,l=m(),p=u("p"),p.textContent=J},l(d){B(t.$$.fragment,d),c=M(d),s=y(d,"P",{"data-svelte-h":!0}),f(s)!=="svelte-1rkmqqz"&&(s.innerHTML=o),l=M(d),p=y(d,"P",{"data-svelte-h":!0}),f(p)!=="svelte-2mgvjd"&&(p.textContent=J)},m(d,U){I(t,d,U),n(d,c,U),n(d,s,U),n(d,l,U),n(d,p,U),w=!0},p:$,i(d){w||(_(t.$$.fragment,d),w=!0)},o(d){C(t.$$.fragment,d),w=!1},d(d){d&&(a(c),a(s),a(l),a(p)),g(t,d)}}}function Bt(T){let t,c,s,o;return t=new Y({props:{id:"fp8-quantization",option:"FLUX-1.dev",$$slots:{default:[Ut]},$$scope:{ctx:T}}}),s=new Y({props:{id:"fp8-quantization",option:"HunyuanVideo",$$slots:{default:[Zt]},$$scope:{ctx:T}}}),{c(){Z(t.$$.fragment),c=m(),Z(s.$$.fragment)},l(l){B(t.$$.fragment,l),c=M(l),B(s.$$.fragment,l)},m(l,p){I(t,l,p),n(l,c,p),I(s,l,p),o=!0},p(l,p){const J={};p&2&&(J.$$scope={dirty:p,ctx:l}),t.$set(J);const w={};p&2&&(w.$$scope={dirty:p,ctx:l}),s.$set(w)},i(l){o||(_(t.$$.fragment,l),_(s.$$.fragment,l),o=!0)},o(l){C(t.$$.fragment,l),C(s.$$.fragment,l),o=!1},d(l){l&&a(c),g(t,l),g(s,l)}}}function It(T){let t,c='Refer to the <a href="https://github.com/chengzeyi/ParaAttention/tree/main" rel="nofollow">ParaAttention</a> repository for detailed instructions and examples of how to scale inference with multiple GPUs.';return{c(){t=u("p"),t.innerHTML=c},l(s){t=y(s,"P",{"data-svelte-h":!0}),f(t)!=="svelte-5948rb"&&(t.innerHTML=c)},m(s,o){n(s,t,o)},p:$,d(s){s&&a(t)}}}function _t(T){let t,c="The code sample below combines First Block Cache, fp8 dynamic quantization, torch.compile, and Context Parallelism for the fastest inference speed.",s,o,l,p,J='Save to <code>run_flux.py</code> and launch it with <a href="https://pytorch.org/docs/stable/elastic/run.html" rel="nofollow">torchrun</a>.',w,d,U,G,h="Inference speed is reduced to 8.20 seconds compared to the baseline, or 3.21x faster, with 2 NVIDIA L20 GPUs. On 4 L20s, inference speed is 3.90 seconds, or 6.75x faster.",W;return o=new F({props:{code:"aW1wb3J0JTIwdGltZSUwQWltcG9ydCUyMHRvcmNoJTBBaW1wb3J0JTIwdG9yY2guZGlzdHJpYnV0ZWQlMjBhcyUyMGRpc3QlMEFmcm9tJTIwZGlmZnVzZXJzJTIwaW1wb3J0JTIwRmx1eFBpcGVsaW5lJTBBJTBBZGlzdC5pbml0X3Byb2Nlc3NfZ3JvdXAoKSUwQSUwQXRvcmNoLmN1ZGEuc2V0X2RldmljZShkaXN0LmdldF9yYW5rKCkpJTBBJTBBcGlwZSUyMCUzRCUyMEZsdXhQaXBlbGluZS5mcm9tX3ByZXRyYWluZWQoJTBBJTIwJTIwJTIwJTIwJTIyYmxhY2stZm9yZXN0LWxhYnMlMkZGTFVYLjEtZGV2JTIyJTJDJTBBJTIwJTIwJTIwJTIwdG9yY2hfZHR5cGUlM0R0b3JjaC5iZmxvYXQxNiUyQyUwQSkudG8oJTIyY3VkYSUyMiklMEElMEFmcm9tJTIwcGFyYV9hdHRuLmNvbnRleHRfcGFyYWxsZWwlMjBpbXBvcnQlMjBpbml0X2NvbnRleHRfcGFyYWxsZWxfbWVzaCUwQWZyb20lMjBwYXJhX2F0dG4uY29udGV4dF9wYXJhbGxlbC5kaWZmdXNlcnNfYWRhcHRlcnMlMjBpbXBvcnQlMjBwYXJhbGxlbGl6ZV9waXBlJTBBZnJvbSUyMHBhcmFfYXR0bi5wYXJhbGxlbF92YWUuZGlmZnVzZXJzX2FkYXB0ZXJzJTIwaW1wb3J0JTIwcGFyYWxsZWxpemVfdmFlJTBBJTBBbWVzaCUyMCUzRCUyMGluaXRfY29udGV4dF9wYXJhbGxlbF9tZXNoKCUwQSUyMCUyMCUyMCUyMHBpcGUuZGV2aWNlLnR5cGUlMkMlMEElMjAlMjAlMjAlMjBtYXhfcmluZ19kaW1fc2l6ZSUzRDIlMkMlMEEpJTBBcGFyYWxsZWxpemVfcGlwZSglMEElMjAlMjAlMjAlMjBwaXBlJTJDJTBBJTIwJTIwJTIwJTIwbWVzaCUzRG1lc2glMkMlMEEpJTBBcGFyYWxsZWxpemVfdmFlKHBpcGUudmFlJTJDJTIwbWVzaCUzRG1lc2guX2ZsYXR0ZW4oKSklMEElMEFmcm9tJTIwcGFyYV9hdHRuLmZpcnN0X2Jsb2NrX2NhY2hlLmRpZmZ1c2Vyc19hZGFwdGVycyUyMGltcG9ydCUyMGFwcGx5X2NhY2hlX29uX3BpcGUlMEElMEFhcHBseV9jYWNoZV9vbl9waXBlKCUwQSUyMCUyMCUyMCUyMHBpcGUlMkMlMEElMjAlMjAlMjAlMjByZXNpZHVhbF9kaWZmX3RocmVzaG9sZCUzRDAuMTIlMkMlMjAlMjAlMjMlMjBVc2UlMjBhJTIwbGFyZ2VyJTIwdmFsdWUlMjB0byUyMG1ha2UlMjB0aGUlMjBjYWNoZSUyMHRha2UlMjBlZmZlY3QlMEEpJTBBJTBBZnJvbSUyMHRvcmNoYW8ucXVhbnRpemF0aW9uJTIwaW1wb3J0JTIwcXVhbnRpemVfJTJDJTIwZmxvYXQ4X2R5bmFtaWNfYWN0aXZhdGlvbl9mbG9hdDhfd2VpZ2h0JTJDJTIwZmxvYXQ4X3dlaWdodF9vbmx5JTBBJTBBcXVhbnRpemVfKHBpcGUudGV4dF9lbmNvZGVyJTJDJTIwZmxvYXQ4X3dlaWdodF9vbmx5KCkpJTBBcXVhbnRpemVfKHBpcGUudHJhbnNmb3JtZXIlMkMlMjBmbG9hdDhfZHluYW1pY19hY3RpdmF0aW9uX2Zsb2F0OF93ZWlnaHQoKSklMEF0b3JjaC5faW5kdWN0b3IuY29uZmlnLnJlb3JkZXJfZm9yX2NvbXB1dGVfY29tbV9vdmVybGFwJTIwJTNEJTIwVHJ1ZSUwQXBpcGUudHJhbnNmb3JtZXIlMjAlM0QlMjB0b3JjaC5jb21waWxlKCUwQSUyMCUyMCUyMHBpcGUudHJhbnNmb3JtZXIlMkMlMjBtb2RlJTNEJTIybWF4LWF1dG90dW5lLW5vLWN1ZGFncmFwaHMlMjIlMkMlMEEpJTBBJTBBJTIzJTIwRW5hYmxlJTIwbWVtb3J5JTIwc2F2aW5ncyUwQSUyMyUyMHBpcGUuZW5hYmxlX21vZGVsX2NwdV9vZmZsb2FkKGdwdV9pZCUzRGRpc3QuZ2V0X3JhbmsoKSklMEElMjMlMjBwaXBlLmVuYWJsZV9zZXF1ZW50aWFsX2NwdV9vZmZsb2FkKGdwdV9pZCUzRGRpc3QuZ2V0X3JhbmsoKSklMEElMEFmb3IlMjBpJTIwaW4lMjByYW5nZSgyKSUzQSUwQSUyMCUyMCUyMCUyMGJlZ2luJTIwJTNEJTIwdGltZS50aW1lKCklMEElMjAlMjAlMjAlMjBpbWFnZSUyMCUzRCUyMHBpcGUoJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIyQSUyMGNhdCUyMGhvbGRpbmclMjBhJTIwc2lnbiUyMHRoYXQlMjBzYXlzJTIwaGVsbG8lMjB3b3JsZCUyMiUyQyUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMG51bV9pbmZlcmVuY2Vfc3RlcHMlM0QyOCUyQyUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMG91dHB1dF90eXBlJTNEJTIycGlsJTIyJTIwaWYlMjBkaXN0LmdldF9yYW5rKCklMjAlM0QlM0QlMjAwJTIwZWxzZSUyMCUyMnB0JTIyJTJDJTBBJTIwJTIwJTIwJTIwKS5pbWFnZXMlNUIwJTVEJTBBJTIwJTIwJTIwJTIwZW5kJTIwJTNEJTIwdGltZS50aW1lKCklMEElMjAlMjAlMjAlMjBpZiUyMGRpc3QuZ2V0X3JhbmsoKSUyMCUzRCUzRCUyMDAlM0ElMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBpZiUyMGklMjAlM0QlM0QlMjAwJTNBJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwcHJpbnQoZiUyMldhcm0lMjB1cCUyMHRpbWUlM0ElMjAlN0JlbmQlMjAtJTIwYmVnaW4lM0EuMmYlN0RzJTIyKSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMGVsc2UlM0ElMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBwcmludChmJTIyVGltZSUzQSUyMCU3QmVuZCUyMC0lMjBiZWdpbiUzQS4yZiU3RHMlMjIpJTBBJTBBaWYlMjBkaXN0LmdldF9yYW5rKCklMjAlM0QlM0QlMjAwJTNBJTBBJTIwJTIwJTIwJTIwcHJpbnQoJTIyU2F2aW5nJTIwaW1hZ2UlMjB0byUyMGZsdXgucG5nJTIyKSUwQSUyMCUyMCUyMCUyMGltYWdlLnNhdmUoJTIyZmx1eC5wbmclMjIpJTBBJTBBZGlzdC5kZXN0cm95X3Byb2Nlc3NfZ3JvdXAoKQ==",highlighted:`<span class="hljs-keyword">import</span> time
<span class="hljs-keyword">import</span> torch
<span class="hljs-keyword">import</span> torch.distributed <span class="hljs-keyword">as</span> dist
<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> FluxPipeline

dist.init_process_group()

torch.cuda.set_device(dist.get_rank())

pipe = FluxPipeline.from_pretrained(
    <span class="hljs-string">&quot;black-forest-labs/FLUX.1-dev&quot;</span>,
    torch_dtype=torch.bfloat16,
).to(<span class="hljs-string">&quot;cuda&quot;</span>)

<span class="hljs-keyword">from</span> para_attn.context_parallel <span class="hljs-keyword">import</span> init_context_parallel_mesh
<span class="hljs-keyword">from</span> para_attn.context_parallel.diffusers_adapters <span class="hljs-keyword">import</span> parallelize_pipe
<span class="hljs-keyword">from</span> para_attn.parallel_vae.diffusers_adapters <span class="hljs-keyword">import</span> parallelize_vae

mesh = init_context_parallel_mesh(
    pipe.device.<span class="hljs-built_in">type</span>,
    max_ring_dim_size=<span class="hljs-number">2</span>,
)
parallelize_pipe(
    pipe,
    mesh=mesh,
)
parallelize_vae(pipe.vae, mesh=mesh._flatten())

<span class="hljs-keyword">from</span> para_attn.first_block_cache.diffusers_adapters <span class="hljs-keyword">import</span> apply_cache_on_pipe

apply_cache_on_pipe(
    pipe,
    residual_diff_threshold=<span class="hljs-number">0.12</span>,  <span class="hljs-comment"># Use a larger value to make the cache take effect</span>
)

<span class="hljs-keyword">from</span> torchao.quantization <span class="hljs-keyword">import</span> quantize_, float8_dynamic_activation_float8_weight, float8_weight_only

quantize_(pipe.text_encoder, float8_weight_only())
quantize_(pipe.transformer, float8_dynamic_activation_float8_weight())
torch._inductor.config.reorder_for_compute_comm_overlap = <span class="hljs-literal">True</span>
pipe.transformer = torch.<span class="hljs-built_in">compile</span>(
   pipe.transformer, mode=<span class="hljs-string">&quot;max-autotune-no-cudagraphs&quot;</span>,
)

<span class="hljs-comment"># Enable memory savings</span>
<span class="hljs-comment"># pipe.enable_model_cpu_offload(gpu_id=dist.get_rank())</span>
<span class="hljs-comment"># pipe.enable_sequential_cpu_offload(gpu_id=dist.get_rank())</span>

<span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">2</span>):
    begin = time.time()
    image = pipe(
        <span class="hljs-string">&quot;A cat holding a sign that says hello world&quot;</span>,
        num_inference_steps=<span class="hljs-number">28</span>,
        output_type=<span class="hljs-string">&quot;pil&quot;</span> <span class="hljs-keyword">if</span> dist.get_rank() == <span class="hljs-number">0</span> <span class="hljs-keyword">else</span> <span class="hljs-string">&quot;pt&quot;</span>,
    ).images[<span class="hljs-number">0</span>]
    end = time.time()
    <span class="hljs-keyword">if</span> dist.get_rank() == <span class="hljs-number">0</span>:
        <span class="hljs-keyword">if</span> i == <span class="hljs-number">0</span>:
            <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;Warm up time: <span class="hljs-subst">{end - begin:<span class="hljs-number">.2</span>f}</span>s&quot;</span>)
        <span class="hljs-keyword">else</span>:
            <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;Time: <span class="hljs-subst">{end - begin:<span class="hljs-number">.2</span>f}</span>s&quot;</span>)

<span class="hljs-keyword">if</span> dist.get_rank() == <span class="hljs-number">0</span>:
    <span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Saving image to flux.png&quot;</span>)
    image.save(<span class="hljs-string">&quot;flux.png&quot;</span>)

dist.destroy_process_group()`,wrap:!1}}),d=new F({props:{code:"JTIzJTIwVXNlJTIwLS1ucHJvY19wZXJfbm9kZSUyMHRvJTIwc3BlY2lmeSUyMHRoZSUyMG51bWJlciUyMG9mJTIwR1BVcyUwQXRvcmNocnVuJTIwLS1ucHJvY19wZXJfbm9kZSUzRDIlMjBydW5fZmx1eC5weQ==",highlighted:`<span class="hljs-comment"># Use --nproc_per_node to specify the number of GPUs</span>
torchrun --nproc_per_node=2 run_flux.py`,wrap:!1}}),{c(){t=u("p"),t.textContent=c,s=m(),Z(o.$$.fragment),l=m(),p=u("p"),p.innerHTML=J,w=m(),Z(d.$$.fragment),U=m(),G=u("p"),G.textContent=h},l(r){t=y(r,"P",{"data-svelte-h":!0}),f(t)!=="svelte-l7izr3"&&(t.textContent=c),s=M(r),B(o.$$.fragment,r),l=M(r),p=y(r,"P",{"data-svelte-h":!0}),f(p)!=="svelte-1gsxpvn"&&(p.innerHTML=J),w=M(r),B(d.$$.fragment,r),U=M(r),G=y(r,"P",{"data-svelte-h":!0}),f(G)!=="svelte-11xwpjh"&&(G.textContent=h)},m(r,b){n(r,t,b),n(r,s,b),I(o,r,b),n(r,l,b),n(r,p,b),n(r,w,b),I(d,r,b),n(r,U,b),n(r,G,b),W=!0},p:$,i(r){W||(_(o.$$.fragment,r),_(d.$$.fragment,r),W=!0)},o(r){C(o.$$.fragment,r),C(d.$$.fragment,r),W=!1},d(r){r&&(a(t),a(s),a(l),a(p),a(w),a(U),a(G)),g(o,r),g(d,r)}}}function Ct(T){let t,c="The code sample below combines First Block Cache and Context Parallelism for the fastest inference speed.",s,o,l,p,J='Save to <code>run_hunyuan_video.py</code> and launch it with <a href="https://pytorch.org/docs/stable/elastic/run.html" rel="nofollow">torchrun</a>.',w,d,U,G,h="Inference speed is reduced to 649.23 seconds compared to the baseline, or 5.66x faster, with 8 NVIDIA L20 GPUs.",W;return o=new F({props:{code:"aW1wb3J0JTIwdGltZSUwQWltcG9ydCUyMHRvcmNoJTBBaW1wb3J0JTIwdG9yY2guZGlzdHJpYnV0ZWQlMjBhcyUyMGRpc3QlMEFmcm9tJTIwZGlmZnVzZXJzJTIwaW1wb3J0JTIwSHVueXVhblZpZGVvUGlwZWxpbmUlMkMlMjBIdW55dWFuVmlkZW9UcmFuc2Zvcm1lcjNETW9kZWwlMEFmcm9tJTIwZGlmZnVzZXJzLnV0aWxzJTIwaW1wb3J0JTIwZXhwb3J0X3RvX3ZpZGVvJTBBJTBBZGlzdC5pbml0X3Byb2Nlc3NfZ3JvdXAoKSUwQSUwQXRvcmNoLmN1ZGEuc2V0X2RldmljZShkaXN0LmdldF9yYW5rKCkpJTBBJTBBbW9kZWxfaWQlMjAlM0QlMjAlMjJ0ZW5jZW50JTJGSHVueXVhblZpZGVvJTIyJTBBdHJhbnNmb3JtZXIlMjAlM0QlMjBIdW55dWFuVmlkZW9UcmFuc2Zvcm1lcjNETW9kZWwuZnJvbV9wcmV0cmFpbmVkKCUwQSUyMCUyMCUyMCUyMG1vZGVsX2lkJTJDJTBBJTIwJTIwJTIwJTIwc3ViZm9sZGVyJTNEJTIydHJhbnNmb3JtZXIlMjIlMkMlMEElMjAlMjAlMjAlMjB0b3JjaF9kdHlwZSUzRHRvcmNoLmJmbG9hdDE2JTJDJTBBJTIwJTIwJTIwJTIwcmV2aXNpb24lM0QlMjJyZWZzJTJGcHIlMkYxOCUyMiUyQyUwQSklMEFwaXBlJTIwJTNEJTIwSHVueXVhblZpZGVvUGlwZWxpbmUuZnJvbV9wcmV0cmFpbmVkKCUwQSUyMCUyMCUyMCUyMG1vZGVsX2lkJTJDJTBBJTIwJTIwJTIwJTIwdHJhbnNmb3JtZXIlM0R0cmFuc2Zvcm1lciUyQyUwQSUyMCUyMCUyMCUyMHRvcmNoX2R0eXBlJTNEdG9yY2guZmxvYXQxNiUyQyUwQSUyMCUyMCUyMCUyMHJldmlzaW9uJTNEJTIycmVmcyUyRnByJTJGMTglMjIlMkMlMEEpLnRvKCUyMmN1ZGElMjIpJTBBJTBBZnJvbSUyMHBhcmFfYXR0bi5jb250ZXh0X3BhcmFsbGVsJTIwaW1wb3J0JTIwaW5pdF9jb250ZXh0X3BhcmFsbGVsX21lc2glMEFmcm9tJTIwcGFyYV9hdHRuLmNvbnRleHRfcGFyYWxsZWwuZGlmZnVzZXJzX2FkYXB0ZXJzJTIwaW1wb3J0JTIwcGFyYWxsZWxpemVfcGlwZSUwQWZyb20lMjBwYXJhX2F0dG4ucGFyYWxsZWxfdmFlLmRpZmZ1c2Vyc19hZGFwdGVycyUyMGltcG9ydCUyMHBhcmFsbGVsaXplX3ZhZSUwQSUwQW1lc2glMjAlM0QlMjBpbml0X2NvbnRleHRfcGFyYWxsZWxfbWVzaCglMEElMjAlMjAlMjAlMjBwaXBlLmRldmljZS50eXBlJTJDJTBBKSUwQXBhcmFsbGVsaXplX3BpcGUoJTBBJTIwJTIwJTIwJTIwcGlwZSUyQyUwQSUyMCUyMCUyMCUyMG1lc2glM0RtZXNoJTJDJTBBKSUwQXBhcmFsbGVsaXplX3ZhZShwaXBlLnZhZSUyQyUyMG1lc2glM0RtZXNoLl9mbGF0dGVuKCkpJTBBJTBBZnJvbSUyMHBhcmFfYXR0bi5maXJzdF9ibG9ja19jYWNoZS5kaWZmdXNlcnNfYWRhcHRlcnMlMjBpbXBvcnQlMjBhcHBseV9jYWNoZV9vbl9waXBlJTBBJTBBYXBwbHlfY2FjaGVfb25fcGlwZShwaXBlKSUwQSUwQSUyMyUyMGZyb20lMjB0b3JjaGFvLnF1YW50aXphdGlvbiUyMGltcG9ydCUyMHF1YW50aXplXyUyQyUyMGZsb2F0OF9keW5hbWljX2FjdGl2YXRpb25fZmxvYXQ4X3dlaWdodCUyQyUyMGZsb2F0OF93ZWlnaHRfb25seSUwQSUyMyUwQSUyMyUyMHRvcmNoLl9pbmR1Y3Rvci5jb25maWcucmVvcmRlcl9mb3JfY29tcHV0ZV9jb21tX292ZXJsYXAlMjAlM0QlMjBUcnVlJTBBJTIzJTBBJTIzJTIwcXVhbnRpemVfKHBpcGUudGV4dF9lbmNvZGVyJTJDJTIwZmxvYXQ4X3dlaWdodF9vbmx5KCkpJTBBJTIzJTIwcXVhbnRpemVfKHBpcGUudHJhbnNmb3JtZXIlMkMlMjBmbG9hdDhfZHluYW1pY19hY3RpdmF0aW9uX2Zsb2F0OF93ZWlnaHQoKSklMEElMjMlMjBwaXBlLnRyYW5zZm9ybWVyJTIwJTNEJTIwdG9yY2guY29tcGlsZSglMEElMjMlMjAlMjAlMjAlMjBwaXBlLnRyYW5zZm9ybWVyJTJDJTIwbW9kZSUzRCUyMm1heC1hdXRvdHVuZS1uby1jdWRhZ3JhcGhzJTIyJTJDJTBBJTIzJTIwKSUwQSUwQSUyMyUyMEVuYWJsZSUyMG1lbW9yeSUyMHNhdmluZ3MlMEFwaXBlLnZhZS5lbmFibGVfdGlsaW5nKCklMEElMjMlMjBwaXBlLmVuYWJsZV9tb2RlbF9jcHVfb2ZmbG9hZChncHVfaWQlM0RkaXN0LmdldF9yYW5rKCkpJTBBJTIzJTIwcGlwZS5lbmFibGVfc2VxdWVudGlhbF9jcHVfb2ZmbG9hZChncHVfaWQlM0RkaXN0LmdldF9yYW5rKCkpJTBBJTBBZm9yJTIwaSUyMGluJTIwcmFuZ2UoMiklM0ElMEElMjAlMjAlMjAlMjBiZWdpbiUyMCUzRCUyMHRpbWUudGltZSgpJTBBJTIwJTIwJTIwJTIwb3V0cHV0JTIwJTNEJTIwcGlwZSglMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBwcm9tcHQlM0QlMjJBJTIwY2F0JTIwd2Fsa3MlMjBvbiUyMHRoZSUyMGdyYXNzJTJDJTIwcmVhbGlzdGljJTIyJTJDJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwaGVpZ2h0JTNENzIwJTJDJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwd2lkdGglM0QxMjgwJTJDJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwbnVtX2ZyYW1lcyUzRDEyOSUyQyUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMG51bV9pbmZlcmVuY2Vfc3RlcHMlM0QxJTIwaWYlMjBpJTIwJTNEJTNEJTIwMCUyMGVsc2UlMjAzMCUyQyUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMG91dHB1dF90eXBlJTNEJTIycGlsJTIyJTIwaWYlMjBkaXN0LmdldF9yYW5rKCklMjAlM0QlM0QlMjAwJTIwZWxzZSUyMCUyMnB0JTIyJTJDJTBBJTIwJTIwJTIwJTIwKS5mcmFtZXMlNUIwJTVEJTBBJTIwJTIwJTIwJTIwZW5kJTIwJTNEJTIwdGltZS50aW1lKCklMEElMjAlMjAlMjAlMjBpZiUyMGRpc3QuZ2V0X3JhbmsoKSUyMCUzRCUzRCUyMDAlM0ElMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBpZiUyMGklMjAlM0QlM0QlMjAwJTNBJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwcHJpbnQoZiUyMldhcm0lMjB1cCUyMHRpbWUlM0ElMjAlN0JlbmQlMjAtJTIwYmVnaW4lM0EuMmYlN0RzJTIyKSUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMGVsc2UlM0ElMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBwcmludChmJTIyVGltZSUzQSUyMCU3QmVuZCUyMC0lMjBiZWdpbiUzQS4yZiU3RHMlMjIpJTBBJTBBaWYlMjBkaXN0LmdldF9yYW5rKCklMjAlM0QlM0QlMjAwJTNBJTBBJTIwJTIwJTIwJTIwcHJpbnQoJTIyU2F2aW5nJTIwdmlkZW8lMjB0byUyMGh1bnl1YW5fdmlkZW8ubXA0JTIyKSUwQSUyMCUyMCUyMCUyMGV4cG9ydF90b192aWRlbyhvdXRwdXQlMkMlMjAlMjJodW55dWFuX3ZpZGVvLm1wNCUyMiUyQyUyMGZwcyUzRDE1KSUwQSUwQWRpc3QuZGVzdHJveV9wcm9jZXNzX2dyb3VwKCk=",highlighted:`<span class="hljs-keyword">import</span> time
<span class="hljs-keyword">import</span> torch
<span class="hljs-keyword">import</span> torch.distributed <span class="hljs-keyword">as</span> dist
<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> HunyuanVideoPipeline, HunyuanVideoTransformer3DModel
<span class="hljs-keyword">from</span> diffusers.utils <span class="hljs-keyword">import</span> export_to_video

dist.init_process_group()

torch.cuda.set_device(dist.get_rank())

model_id = <span class="hljs-string">&quot;tencent/HunyuanVideo&quot;</span>
transformer = HunyuanVideoTransformer3DModel.from_pretrained(
    model_id,
    subfolder=<span class="hljs-string">&quot;transformer&quot;</span>,
    torch_dtype=torch.bfloat16,
    revision=<span class="hljs-string">&quot;refs/pr/18&quot;</span>,
)
pipe = HunyuanVideoPipeline.from_pretrained(
    model_id,
    transformer=transformer,
    torch_dtype=torch.float16,
    revision=<span class="hljs-string">&quot;refs/pr/18&quot;</span>,
).to(<span class="hljs-string">&quot;cuda&quot;</span>)

<span class="hljs-keyword">from</span> para_attn.context_parallel <span class="hljs-keyword">import</span> init_context_parallel_mesh
<span class="hljs-keyword">from</span> para_attn.context_parallel.diffusers_adapters <span class="hljs-keyword">import</span> parallelize_pipe
<span class="hljs-keyword">from</span> para_attn.parallel_vae.diffusers_adapters <span class="hljs-keyword">import</span> parallelize_vae

mesh = init_context_parallel_mesh(
    pipe.device.<span class="hljs-built_in">type</span>,
)
parallelize_pipe(
    pipe,
    mesh=mesh,
)
parallelize_vae(pipe.vae, mesh=mesh._flatten())

<span class="hljs-keyword">from</span> para_attn.first_block_cache.diffusers_adapters <span class="hljs-keyword">import</span> apply_cache_on_pipe

apply_cache_on_pipe(pipe)

<span class="hljs-comment"># from torchao.quantization import quantize_, float8_dynamic_activation_float8_weight, float8_weight_only</span>
<span class="hljs-comment">#</span>
<span class="hljs-comment"># torch._inductor.config.reorder_for_compute_comm_overlap = True</span>
<span class="hljs-comment">#</span>
<span class="hljs-comment"># quantize_(pipe.text_encoder, float8_weight_only())</span>
<span class="hljs-comment"># quantize_(pipe.transformer, float8_dynamic_activation_float8_weight())</span>
<span class="hljs-comment"># pipe.transformer = torch.compile(</span>
<span class="hljs-comment">#    pipe.transformer, mode=&quot;max-autotune-no-cudagraphs&quot;,</span>
<span class="hljs-comment"># )</span>

<span class="hljs-comment"># Enable memory savings</span>
pipe.vae.enable_tiling()
<span class="hljs-comment"># pipe.enable_model_cpu_offload(gpu_id=dist.get_rank())</span>
<span class="hljs-comment"># pipe.enable_sequential_cpu_offload(gpu_id=dist.get_rank())</span>

<span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">2</span>):
    begin = time.time()
    output = pipe(
        prompt=<span class="hljs-string">&quot;A cat walks on the grass, realistic&quot;</span>,
        height=<span class="hljs-number">720</span>,
        width=<span class="hljs-number">1280</span>,
        num_frames=<span class="hljs-number">129</span>,
        num_inference_steps=<span class="hljs-number">1</span> <span class="hljs-keyword">if</span> i == <span class="hljs-number">0</span> <span class="hljs-keyword">else</span> <span class="hljs-number">30</span>,
        output_type=<span class="hljs-string">&quot;pil&quot;</span> <span class="hljs-keyword">if</span> dist.get_rank() == <span class="hljs-number">0</span> <span class="hljs-keyword">else</span> <span class="hljs-string">&quot;pt&quot;</span>,
    ).frames[<span class="hljs-number">0</span>]
    end = time.time()
    <span class="hljs-keyword">if</span> dist.get_rank() == <span class="hljs-number">0</span>:
        <span class="hljs-keyword">if</span> i == <span class="hljs-number">0</span>:
            <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;Warm up time: <span class="hljs-subst">{end - begin:<span class="hljs-number">.2</span>f}</span>s&quot;</span>)
        <span class="hljs-keyword">else</span>:
            <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;Time: <span class="hljs-subst">{end - begin:<span class="hljs-number">.2</span>f}</span>s&quot;</span>)

<span class="hljs-keyword">if</span> dist.get_rank() == <span class="hljs-number">0</span>:
    <span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Saving video to hunyuan_video.mp4&quot;</span>)
    export_to_video(output, <span class="hljs-string">&quot;hunyuan_video.mp4&quot;</span>, fps=<span class="hljs-number">15</span>)

dist.destroy_process_group()`,wrap:!1}}),d=new F({props:{code:"JTIzJTIwVXNlJTIwLS1ucHJvY19wZXJfbm9kZSUyMHRvJTIwc3BlY2lmeSUyMHRoZSUyMG51bWJlciUyMG9mJTIwR1BVcyUwQXRvcmNocnVuJTIwLS1ucHJvY19wZXJfbm9kZSUzRDglMjBydW5faHVueXVhbl92aWRlby5weQ==",highlighted:`<span class="hljs-comment"># Use --nproc_per_node to specify the number of GPUs</span>
torchrun --nproc_per_node=8 run_hunyuan_video.py`,wrap:!1}}),{c(){t=u("p"),t.textContent=c,s=m(),Z(o.$$.fragment),l=m(),p=u("p"),p.innerHTML=J,w=m(),Z(d.$$.fragment),U=m(),G=u("p"),G.textContent=h},l(r){t=y(r,"P",{"data-svelte-h":!0}),f(t)!=="svelte-muxsqm"&&(t.textContent=c),s=M(r),B(o.$$.fragment,r),l=M(r),p=y(r,"P",{"data-svelte-h":!0}),f(p)!=="svelte-7sbjia"&&(p.innerHTML=J),w=M(r),B(d.$$.fragment,r),U=M(r),G=y(r,"P",{"data-svelte-h":!0}),f(G)!=="svelte-d28thb"&&(G.textContent=h)},m(r,b){n(r,t,b),n(r,s,b),I(o,r,b),n(r,l,b),n(r,p,b),n(r,w,b),I(d,r,b),n(r,U,b),n(r,G,b),W=!0},p:$,i(r){W||(_(o.$$.fragment,r),_(d.$$.fragment,r),W=!0)},o(r){C(o.$$.fragment,r),C(d.$$.fragment,r),W=!1},d(r){r&&(a(t),a(s),a(l),a(p),a(w),a(U),a(G)),g(o,r),g(d,r)}}}function gt(T){let t,c,s,o;return t=new Y({props:{id:"context-parallelism",option:"FLUX-1.dev",$$slots:{default:[_t]},$$scope:{ctx:T}}}),s=new Y({props:{id:"context-parallelism",option:"HunyuanVideo",$$slots:{default:[Ct]},$$scope:{ctx:T}}}),{c(){Z(t.$$.fragment),c=m(),Z(s.$$.fragment)},l(l){B(t.$$.fragment,l),c=M(l),B(s.$$.fragment,l)},m(l,p){I(t,l,p),n(l,c,p),I(s,l,p),o=!0},p(l,p){const J={};p&2&&(J.$$scope={dirty:p,ctx:l}),t.$set(J);const w={};p&2&&(w.$$scope={dirty:p,ctx:l}),s.$set(w)},i(l){o||(_(t.$$.fragment,l),_(s.$$.fragment,l),o=!0)},o(l){C(t.$$.fragment,l),C(s.$$.fragment,l),o=!1},d(l){l&&a(c),g(t,l),g(s,l)}}}function Gt(T){let t,c="<thead><tr><th>GPU Type</th> <th>Number of GPUs</th> <th>Optimizations</th> <th>Wall Time (s)</th> <th>Speedup</th></tr></thead> <tbody><tr><td>NVIDIA L20</td> <td>1</td> <td>Baseline</td> <td>26.36</td> <td>1.00x</td></tr> <tr><td>NVIDIA L20</td> <td>1</td> <td>FBCache (rdt=0.08)</td> <td>17.01</td> <td>1.55x</td></tr> <tr><td>NVIDIA L20</td> <td>1</td> <td>FP8 DQ</td> <td>13.40</td> <td>1.96x</td></tr> <tr><td>NVIDIA L20</td> <td>1</td> <td>FBCache (rdt=0.12) + FP8 DQ</td> <td>7.56</td> <td>3.48x</td></tr> <tr><td>NVIDIA L20</td> <td>2</td> <td>FBCache (rdt=0.12) + FP8 DQ + CP</td> <td>4.92</td> <td>5.35x</td></tr> <tr><td>NVIDIA L20</td> <td>4</td> <td>FBCache (rdt=0.12) + FP8 DQ + CP</td> <td>3.90</td> <td>6.75x</td></tr></tbody>";return{c(){t=u("table"),t.innerHTML=c},l(s){t=y(s,"TABLE",{"data-svelte-h":!0}),f(t)!=="svelte-1eiq4i6"&&(t.innerHTML=c)},m(s,o){n(s,t,o)},p:$,d(s){s&&a(t)}}}function Wt(T){let t,c="<thead><tr><th>GPU Type</th> <th>Number of GPUs</th> <th>Optimizations</th> <th>Wall Time (s)</th> <th>Speedup</th></tr></thead> <tbody><tr><td>NVIDIA L20</td> <td>1</td> <td>Baseline</td> <td>3675.71</td> <td>1.00x</td></tr> <tr><td>NVIDIA L20</td> <td>1</td> <td>FBCache</td> <td>2271.06</td> <td>1.62x</td></tr> <tr><td>NVIDIA L20</td> <td>2</td> <td>FBCache + CP</td> <td>1132.90</td> <td>3.24x</td></tr> <tr><td>NVIDIA L20</td> <td>4</td> <td>FBCache + CP</td> <td>718.15</td> <td>5.12x</td></tr> <tr><td>NVIDIA L20</td> <td>8</td> <td>FBCache + CP</td> <td>649.23</td> <td>5.66x</td></tr></tbody>";return{c(){t=u("table"),t.innerHTML=c},l(s){t=y(s,"TABLE",{"data-svelte-h":!0}),f(t)!=="svelte-1rcid57"&&(t.innerHTML=c)},m(s,o){n(s,t,o)},p:$,d(s){s&&a(t)}}}function vt(T){let t,c,s,o;return t=new Y({props:{id:"conclusion",option:"FLUX-1.dev",$$slots:{default:[Gt]},$$scope:{ctx:T}}}),s=new Y({props:{id:"conclusion",option:"HunyuanVideo",$$slots:{default:[Wt]},$$scope:{ctx:T}}}),{c(){Z(t.$$.fragment),c=m(),Z(s.$$.fragment)},l(l){B(t.$$.fragment,l),c=M(l),B(s.$$.fragment,l)},m(l,p){I(t,l,p),n(l,c,p),I(s,l,p),o=!0},p(l,p){const J={};p&2&&(J.$$scope={dirty:p,ctx:l}),t.$set(J);const w={};p&2&&(w.$$scope={dirty:p,ctx:l}),s.$set(w)},i(l){o||(_(t.$$.fragment,l),_(s.$$.fragment,l),o=!0)},o(l){C(t.$$.fragment,l),C(s.$$.fragment,l),o=!1},d(l){l&&a(c),g(t,l),g(s,l)}}}function Vt(T){let t,c,s,o,l,p,J,w='<img src="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/diffusers/para-attn/flux-performance.png"/>',d,U,G='<img src="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/diffusers/para-attn/hunyuan-video-performance.png"/>',h,W,r='Large image and video generation models, such as <a href="https://huggingface.co/black-forest-labs/FLUX.1-dev" rel="nofollow">FLUX.1-dev</a> and <a href="https://huggingface.co/tencent/HunyuanVideo" rel="nofollow">HunyuanVideo</a>, can be an inference challenge for real-time applications and deployment because of their size.',b,X,N='<a href="https://github.com/chengzeyi/ParaAttention" rel="nofollow">ParaAttention</a> is a library that implements <strong>context parallelism</strong> and <strong>first block cache</strong>, and can be combined with other techniques (torch.compile, fp8 dynamic quantization), to accelerate inference.',V,k,z=`This guide will show you how to apply ParaAttention to FLUX.1-dev and HunyuanVideo on NVIDIA L20 GPUs.
No optimizations are applied for our baseline benchmark, except for HunyuanVideo to avoid out-of-memory errors.`,j,v,Re="Our baseline benchmark shows that FLUX.1-dev is able to generate a 1024x1024 resolution image in 28 steps in 26.36 seconds, and HunyuanVideo is able to generate 129 frames at 720p resolution in 30 steps in 3675.71 seconds.",ue,H,ye,q,he,L,Ye="Caching the output of the transformers blocks in the model and reusing them in the next inference steps reduces the computation cost and makes inference faster.",fe,D,Ne="However, it is hard to decide when to reuse the cache to ensure quality generated images or videos. ParaAttention directly uses the <strong>residual difference of the first transformer block output</strong> to approximate the difference among model outputs. When the difference is small enough, the residual difference of previous inference steps is reused. In other words, the denoising step is skipped.",Je,K,ze="This achieves a 2x speedup on FLUX.1-dev and HunyuanVideo inference with very good quality.",we,P,qe='<img src="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/diffusers/para-attn/ada-cache.png" alt="Cache in Diffusion Transformer"/> <figcaption>How AdaCache works, First Block Cache is a variant of it</figcaption>',je,Q,Te,O,be,ee,Le='fp8 with dynamic quantization further speeds up inference and reduces memory usage. Both the activations and weights must be quantized in order to use the 8-bit <a href="https://www.nvidia.com/en-us/data-center/tensor-cores/" rel="nofollow">NVIDIA Tensor Cores</a>.',Ue,te,De="Use <code>float8_weight_only</code> and <code>float8_dynamic_activation_float8_weight</code> to quantize the text encoder and transformer model.",Ze,le,Ke="The default quantization method is per tensor quantization, but if your GPU supports row-wise quantization, you can also try it for better accuracy.",Be,se,Pe='Install <a href="https://github.com/pytorch/ao/tree/main" rel="nofollow">torchao</a> with the command below.',Ie,ae,_e,ne,Oe='<a href="https://pytorch.org/tutorials/intermediate/torch_compile_tutorial.html" rel="nofollow">torch.compile</a> with <code>mode=&quot;max-autotune-no-cudagraphs&quot;</code> or <code>mode=&quot;max-autotune&quot;</code> selects the best kernel for performance. Compilation can take a long time if it’s the first time the model is called, but it is worth it once the model has been compiled.',Ce,pe,et="This example only quantizes the transformer model, but you can also quantize the text encoder to reduce memory usage even more.",ge,A,Ge,S,We,ie,ve,oe,tt="Context Parallelism parallelizes inference and scales with multiple GPUs. The ParaAttention compositional design allows you to combine Context Parallelism with First Block Cache and dynamic quantization.",Ve,x,$e,re,lt='If the inference process needs to be persistent and serviceable, it is suggested to use <a href="https://pytorch.org/docs/stable/multiprocessing.html" rel="nofollow">torch.multiprocessing</a> to write your own inference processor. This can eliminate the overhead of launching the process and loading and recompiling the model.',Xe,E,ke,ce,Fe,R,He,me,Qe,Me,Ae;return l=new de({props:{title:"ParaAttention",local:"paraattention",headingTag:"h1"}}),H=new Ee({props:{warning:!1,$$slots:{default:[Jt]},$$scope:{ctx:T}}}),q=new de({props:{title:"First Block Cache",local:"first-block-cache",headingTag:"h2"}}),Q=new xe({props:{id:"first-block-cache",options:["FLUX-1.dev","HunyuanVideo"],$$slots:{default:[Tt]},$$scope:{ctx:T}}}),O=new de({props:{title:"fp8 quantization",local:"fp8-quantization",headingTag:"h2"}}),ae=new F({props:{code:"cGlwMyUyMGluc3RhbGwlMjAtVSUyMHRvcmNoJTIwdG9yY2hhbw==",highlighted:"pip3 install -U torch torchao",wrap:!1}}),A=new Ee({props:{warning:!1,$$slots:{default:[bt]},$$scope:{ctx:T}}}),S=new xe({props:{id:"fp8-quantization",options:["FLUX-1.dev","HunyuanVideo"],$$slots:{default:[Bt]},$$scope:{ctx:T}}}),ie=new de({props:{title:"Context Parallelism",local:"context-parallelism",headingTag:"h2"}}),x=new Ee({props:{warning:!1,$$slots:{default:[It]},$$scope:{ctx:T}}}),E=new xe({props:{id:"context-parallelism",options:["FLUX-1.dev","HunyuanVideo"],$$slots:{default:[gt]},$$scope:{ctx:T}}}),ce=new de({props:{title:"Benchmarks",local:"benchmarks",headingTag:"h2"}}),R=new xe({props:{id:"conclusion",options:["FLUX-1.dev","HunyuanVideo"],$$slots:{default:[vt]},$$scope:{ctx:T}}}),me=new ft({props:{source:"https://github.com/huggingface/diffusers/blob/main/docs/source/en/optimization/para_attn.md"}}),{c(){t=u("meta"),c=m(),s=u("p"),o=m(),Z(l.$$.fragment),p=m(),J=u("div"),J.innerHTML=w,d=m(),U=u("div"),U.innerHTML=G,h=m(),W=u("p"),W.innerHTML=r,b=m(),X=u("p"),X.innerHTML=N,V=m(),k=u("p"),k.textContent=z,j=m(),v=u("p"),v.textContent=Re,ue=m(),Z(H.$$.fragment),ye=m(),Z(q.$$.fragment),he=m(),L=u("p"),L.textContent=Ye,fe=m(),D=u("p"),D.innerHTML=Ne,Je=m(),K=u("p"),K.textContent=ze,we=m(),P=u("figure"),P.innerHTML=qe,je=m(),Z(Q.$$.fragment),Te=m(),Z(O.$$.fragment),be=m(),ee=u("p"),ee.innerHTML=Le,Ue=m(),te=u("p"),te.innerHTML=De,Ze=m(),le=u("p"),le.textContent=Ke,Be=m(),se=u("p"),se.innerHTML=Pe,Ie=m(),Z(ae.$$.fragment),_e=m(),ne=u("p"),ne.innerHTML=Oe,Ce=m(),pe=u("p"),pe.textContent=et,ge=m(),Z(A.$$.fragment),Ge=m(),Z(S.$$.fragment),We=m(),Z(ie.$$.fragment),ve=m(),oe=u("p"),oe.textContent=tt,Ve=m(),Z(x.$$.fragment),$e=m(),re=u("p"),re.innerHTML=lt,Xe=m(),Z(E.$$.fragment),ke=m(),Z(ce.$$.fragment),Fe=m(),Z(R.$$.fragment),He=m(),Z(me.$$.fragment),Qe=m(),Me=u("p"),this.h()},l(e){const i=yt("svelte-u9bgzb",document.head);t=y(i,"META",{name:!0,content:!0}),i.forEach(a),c=M(e),s=y(e,"P",{}),ct(s).forEach(a),o=M(e),B(l.$$.fragment,e),p=M(e),J=y(e,"DIV",{class:!0,"data-svelte-h":!0}),f(J)!=="svelte-1p4slnk"&&(J.innerHTML=w),d=M(e),U=y(e,"DIV",{class:!0,"data-svelte-h":!0}),f(U)!=="svelte-1kqq4mt"&&(U.innerHTML=G),h=M(e),W=y(e,"P",{"data-svelte-h":!0}),f(W)!=="svelte-uizfax"&&(W.innerHTML=r),b=M(e),X=y(e,"P",{"data-svelte-h":!0}),f(X)!=="svelte-1ufw59x"&&(X.innerHTML=N),V=M(e),k=y(e,"P",{"data-svelte-h":!0}),f(k)!=="svelte-y6ktum"&&(k.textContent=z),j=M(e),v=y(e,"P",{"data-svelte-h":!0}),f(v)!=="svelte-12v81em"&&(v.textContent=Re),ue=M(e),B(H.$$.fragment,e),ye=M(e),B(q.$$.fragment,e),he=M(e),L=y(e,"P",{"data-svelte-h":!0}),f(L)!=="svelte-zipcqj"&&(L.textContent=Ye),fe=M(e),D=y(e,"P",{"data-svelte-h":!0}),f(D)!=="svelte-11q05n5"&&(D.innerHTML=Ne),Je=M(e),K=y(e,"P",{"data-svelte-h":!0}),f(K)!=="svelte-1ecvggt"&&(K.textContent=ze),we=M(e),P=y(e,"FIGURE",{"data-svelte-h":!0}),f(P)!=="svelte-1czvnic"&&(P.innerHTML=qe),je=M(e),B(Q.$$.fragment,e),Te=M(e),B(O.$$.fragment,e),be=M(e),ee=y(e,"P",{"data-svelte-h":!0}),f(ee)!=="svelte-yi5eo1"&&(ee.innerHTML=Le),Ue=M(e),te=y(e,"P",{"data-svelte-h":!0}),f(te)!=="svelte-10ndi9a"&&(te.innerHTML=De),Ze=M(e),le=y(e,"P",{"data-svelte-h":!0}),f(le)!=="svelte-1dzea4g"&&(le.textContent=Ke),Be=M(e),se=y(e,"P",{"data-svelte-h":!0}),f(se)!=="svelte-edf8tk"&&(se.innerHTML=Pe),Ie=M(e),B(ae.$$.fragment,e),_e=M(e),ne=y(e,"P",{"data-svelte-h":!0}),f(ne)!=="svelte-xjm2cj"&&(ne.innerHTML=Oe),Ce=M(e),pe=y(e,"P",{"data-svelte-h":!0}),f(pe)!=="svelte-1akf52n"&&(pe.textContent=et),ge=M(e),B(A.$$.fragment,e),Ge=M(e),B(S.$$.fragment,e),We=M(e),B(ie.$$.fragment,e),ve=M(e),oe=y(e,"P",{"data-svelte-h":!0}),f(oe)!=="svelte-vw4vn"&&(oe.textContent=tt),Ve=M(e),B(x.$$.fragment,e),$e=M(e),re=y(e,"P",{"data-svelte-h":!0}),f(re)!=="svelte-1vj39hr"&&(re.innerHTML=lt),Xe=M(e),B(E.$$.fragment,e),ke=M(e),B(ce.$$.fragment,e),Fe=M(e),B(R.$$.fragment,e),He=M(e),B(me.$$.fragment,e),Qe=M(e),Me=y(e,"P",{}),ct(Me).forEach(a),this.h()},h(){Se(t,"name","hf:doc:metadata"),Se(t,"content",$t),Se(J,"class","flex justify-center"),Se(U,"class","flex justify-center")},m(e,i){ht(document.head,t),n(e,c,i),n(e,s,i),n(e,o,i),I(l,e,i),n(e,p,i),n(e,J,i),n(e,d,i),n(e,U,i),n(e,h,i),n(e,W,i),n(e,b,i),n(e,X,i),n(e,V,i),n(e,k,i),n(e,j,i),n(e,v,i),n(e,ue,i),I(H,e,i),n(e,ye,i),I(q,e,i),n(e,he,i),n(e,L,i),n(e,fe,i),n(e,D,i),n(e,Je,i),n(e,K,i),n(e,we,i),n(e,P,i),n(e,je,i),I(Q,e,i),n(e,Te,i),I(O,e,i),n(e,be,i),n(e,ee,i),n(e,Ue,i),n(e,te,i),n(e,Ze,i),n(e,le,i),n(e,Be,i),n(e,se,i),n(e,Ie,i),I(ae,e,i),n(e,_e,i),n(e,ne,i),n(e,Ce,i),n(e,pe,i),n(e,ge,i),I(A,e,i),n(e,Ge,i),I(S,e,i),n(e,We,i),I(ie,e,i),n(e,ve,i),n(e,oe,i),n(e,Ve,i),I(x,e,i),n(e,$e,i),n(e,re,i),n(e,Xe,i),I(E,e,i),n(e,ke,i),I(ce,e,i),n(e,Fe,i),I(R,e,i),n(e,He,i),I(me,e,i),n(e,Qe,i),n(e,Me,i),Ae=!0},p(e,[i]){const st={};i&2&&(st.$$scope={dirty:i,ctx:e}),H.$set(st);const at={};i&2&&(at.$$scope={dirty:i,ctx:e}),Q.$set(at);const nt={};i&2&&(nt.$$scope={dirty:i,ctx:e}),A.$set(nt);const pt={};i&2&&(pt.$$scope={dirty:i,ctx:e}),S.$set(pt);const it={};i&2&&(it.$$scope={dirty:i,ctx:e}),x.$set(it);const ot={};i&2&&(ot.$$scope={dirty:i,ctx:e}),E.$set(ot);const rt={};i&2&&(rt.$$scope={dirty:i,ctx:e}),R.$set(rt)},i(e){Ae||(_(l.$$.fragment,e),_(H.$$.fragment,e),_(q.$$.fragment,e),_(Q.$$.fragment,e),_(O.$$.fragment,e),_(ae.$$.fragment,e),_(A.$$.fragment,e),_(S.$$.fragment,e),_(ie.$$.fragment,e),_(x.$$.fragment,e),_(E.$$.fragment,e),_(ce.$$.fragment,e),_(R.$$.fragment,e),_(me.$$.fragment,e),Ae=!0)},o(e){C(l.$$.fragment,e),C(H.$$.fragment,e),C(q.$$.fragment,e),C(Q.$$.fragment,e),C(O.$$.fragment,e),C(ae.$$.fragment,e),C(A.$$.fragment,e),C(S.$$.fragment,e),C(ie.$$.fragment,e),C(x.$$.fragment,e),C(E.$$.fragment,e),C(ce.$$.fragment,e),C(R.$$.fragment,e),C(me.$$.fragment,e),Ae=!1},d(e){e&&(a(c),a(s),a(o),a(p),a(J),a(d),a(U),a(h),a(W),a(b),a(X),a(V),a(k),a(j),a(v),a(ue),a(ye),a(he),a(L),a(fe),a(D),a(Je),a(K),a(we),a(P),a(je),a(Te),a(be),a(ee),a(Ue),a(te),a(Ze),a(le),a(Be),a(se),a(Ie),a(_e),a(ne),a(Ce),a(pe),a(ge),a(Ge),a(We),a(ve),a(oe),a(Ve),a($e),a(re),a(Xe),a(ke),a(Fe),a(He),a(Qe),a(Me)),a(t),g(l,e),g(H,e),g(q,e),g(Q,e),g(O,e),g(ae,e),g(A,e),g(S,e),g(ie,e),g(x,e),g(E,e),g(ce,e),g(R,e),g(me,e)}}}const $t='{"title":"ParaAttention","local":"paraattention","sections":[{"title":"First Block Cache","local":"first-block-cache","sections":[],"depth":2},{"title":"fp8 quantization","local":"fp8-quantization","sections":[],"depth":2},{"title":"Context Parallelism","local":"context-parallelism","sections":[],"depth":2},{"title":"Benchmarks","local":"benchmarks","sections":[],"depth":2}],"depth":1}';function Xt(T){return Mt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class xt extends dt{constructor(t){super(),ut(this,t,Xt,Vt,mt,{})}}export{xt as component};
