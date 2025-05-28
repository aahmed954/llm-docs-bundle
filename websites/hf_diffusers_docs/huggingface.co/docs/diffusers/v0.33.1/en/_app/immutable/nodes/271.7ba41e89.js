import{s as Pl,o as Kl,n as tl}from"../chunks/scheduler.8c3d61f6.js";import{S as Ol,i as le,g as h,s as d,r as T,A as ee,h as y,f as s,c as J,j as xl,u as w,x as W,k as Ll,y as se,a,v as b,d as f,t as U,w as Z,m as ae,n as te}from"../chunks/index.da70eac4.js";import{T as Bl}from"../chunks/Tip.1d9b8c37.js";import{C as R}from"../chunks/CodeBlock.a9c4becf.js";import{D as ne}from"../chunks/DocNotebookDropdown.48852948.js";import{H as al,E as ie}from"../chunks/index.5d4ab994.js";import{H as ql,a as pl}from"../chunks/HfOption.6ab18950.js";function pe(I){let e,c='For more technical details of TCD, please refer to the <a href="https://arxiv.org/abs/2402.19159" rel="nofollow">paper</a> or official <a href="https://mhh0318.github.io/tcd/" rel="nofollow">project page</a>).';return{c(){e=h("p"),e.innerHTML=c},l(n){e=y(n,"P",{"data-svelte-h":!0}),W(e)!=="svelte-1apoih8"&&(e.innerHTML=c)},m(n,M){a(n,e,M)},p:tl,d(n){n&&s(e)}}}function oe(I){let e,c,n,M='<img src="https://github.com/jabir-zheng/TCD/raw/main/assets/demo_image.png"/>',p;return e=new R({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwZGlmZnVzZXJzJTIwaW1wb3J0JTIwU3RhYmxlRGlmZnVzaW9uWExQaXBlbGluZSUyQyUyMFRDRFNjaGVkdWxlciUwQSUwQWRldmljZSUyMCUzRCUyMCUyMmN1ZGElMjIlMEFiYXNlX21vZGVsX2lkJTIwJTNEJTIwJTIyc3RhYmlsaXR5YWklMkZzdGFibGUtZGlmZnVzaW9uLXhsLWJhc2UtMS4wJTIyJTBBdGNkX2xvcmFfaWQlMjAlM0QlMjAlMjJoMXQlMkZUQ0QtU0RYTC1Mb1JBJTIyJTBBJTBBcGlwZSUyMCUzRCUyMFN0YWJsZURpZmZ1c2lvblhMUGlwZWxpbmUuZnJvbV9wcmV0cmFpbmVkKGJhc2VfbW9kZWxfaWQlMkMlMjB0b3JjaF9kdHlwZSUzRHRvcmNoLmZsb2F0MTYlMkMlMjB2YXJpYW50JTNEJTIyZnAxNiUyMikudG8oZGV2aWNlKSUwQXBpcGUuc2NoZWR1bGVyJTIwJTNEJTIwVENEU2NoZWR1bGVyLmZyb21fY29uZmlnKHBpcGUuc2NoZWR1bGVyLmNvbmZpZyklMEElMEFwaXBlLmxvYWRfbG9yYV93ZWlnaHRzKHRjZF9sb3JhX2lkKSUwQXBpcGUuZnVzZV9sb3JhKCklMEElMEFwcm9tcHQlMjAlM0QlMjAlMjJQYWludGluZyUyMG9mJTIwdGhlJTIwb3JhbmdlJTIwY2F0JTIwT3R0byUyMHZvbiUyMEdhcmZpZWxkJTJDJTIwQ291bnQlMjBvZiUyMEJpc21hcmNrLVNjaCVDMyVCNm5oYXVzZW4lMkMlMjBEdWtlJTIwb2YlMjBMYXVlbmJ1cmclMkMlMjBNaW5pc3Rlci1QcmVzaWRlbnQlMjBvZiUyMFBydXNzaWEuJTIwRGVwaWN0ZWQlMjB3ZWFyaW5nJTIwYSUyMFBydXNzaWFuJTIwUGlja2VsaGF1YmUlMjBhbmQlMjBlYXRpbmclMjBoaXMlMjBmYXZvcml0ZSUyMG1lYWwlMjAtJTIwbGFzYWduYS4lMjIlMEElMEFpbWFnZSUyMCUzRCUyMHBpcGUoJTBBJTIwJTIwJTIwJTIwcHJvbXB0JTNEcHJvbXB0JTJDJTBBJTIwJTIwJTIwJTIwbnVtX2luZmVyZW5jZV9zdGVwcyUzRDQlMkMlMEElMjAlMjAlMjAlMjBndWlkYW5jZV9zY2FsZSUzRDAlMkMlMEElMjAlMjAlMjAlMjBldGElM0QwLjMlMkMlMEElMjAlMjAlMjAlMjBnZW5lcmF0b3IlM0R0b3JjaC5HZW5lcmF0b3IoZGV2aWNlJTNEZGV2aWNlKS5tYW51YWxfc2VlZCgwKSUyQyUwQSkuaW1hZ2VzJTVCMCU1RA==",highlighted:`<span class="hljs-keyword">import</span> torch
<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> StableDiffusionXLPipeline, TCDScheduler

device = <span class="hljs-string">&quot;cuda&quot;</span>
base_model_id = <span class="hljs-string">&quot;stabilityai/stable-diffusion-xl-base-1.0&quot;</span>
tcd_lora_id = <span class="hljs-string">&quot;h1t/TCD-SDXL-LoRA&quot;</span>

pipe = StableDiffusionXLPipeline.from_pretrained(base_model_id, torch_dtype=torch.float16, variant=<span class="hljs-string">&quot;fp16&quot;</span>).to(device)
pipe.scheduler = TCDScheduler.from_config(pipe.scheduler.config)

pipe.load_lora_weights(tcd_lora_id)
pipe.fuse_lora()

prompt = <span class="hljs-string">&quot;Painting of the orange cat Otto von Garfield, Count of Bismarck-Schönhausen, Duke of Lauenburg, Minister-President of Prussia. Depicted wearing a Prussian Pickelhaube and eating his favorite meal - lasagna.&quot;</span>

image = pipe(
    prompt=prompt,
    num_inference_steps=<span class="hljs-number">4</span>,
    guidance_scale=<span class="hljs-number">0</span>,
    eta=<span class="hljs-number">0.3</span>,
    generator=torch.Generator(device=device).manual_seed(<span class="hljs-number">0</span>),
).images[<span class="hljs-number">0</span>]`,wrap:!1}}),{c(){T(e.$$.fragment),c=d(),n=h("p"),n.innerHTML=M},l(i){w(e.$$.fragment,i),c=J(i),n=y(i,"P",{"data-svelte-h":!0}),W(n)!=="svelte-nuvmzb"&&(n.innerHTML=M)},m(i,o){b(e,i,o),a(i,c,o),a(i,n,o),p=!0},p:tl,i(i){p||(f(e.$$.fragment,i),p=!0)},o(i){U(e.$$.fragment,i),p=!1},d(i){i&&(s(c),s(n)),Z(e,i)}}}function re(I){let e,c,n,M='<img src="https://github.com/jabir-zheng/TCD/raw/main/assets/inpainting_tcd.png"/>',p;return e=new R({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwZGlmZnVzZXJzJTIwaW1wb3J0JTIwQXV0b1BpcGVsaW5lRm9ySW5wYWludGluZyUyQyUyMFRDRFNjaGVkdWxlciUwQWZyb20lMjBkaWZmdXNlcnMudXRpbHMlMjBpbXBvcnQlMjBsb2FkX2ltYWdlJTJDJTIwbWFrZV9pbWFnZV9ncmlkJTBBJTBBZGV2aWNlJTIwJTNEJTIwJTIyY3VkYSUyMiUwQWJhc2VfbW9kZWxfaWQlMjAlM0QlMjAlMjJkaWZmdXNlcnMlMkZzdGFibGUtZGlmZnVzaW9uLXhsLTEuMC1pbnBhaW50aW5nLTAuMSUyMiUwQXRjZF9sb3JhX2lkJTIwJTNEJTIwJTIyaDF0JTJGVENELVNEWEwtTG9SQSUyMiUwQSUwQXBpcGUlMjAlM0QlMjBBdXRvUGlwZWxpbmVGb3JJbnBhaW50aW5nLmZyb21fcHJldHJhaW5lZChiYXNlX21vZGVsX2lkJTJDJTIwdG9yY2hfZHR5cGUlM0R0b3JjaC5mbG9hdDE2JTJDJTIwdmFyaWFudCUzRCUyMmZwMTYlMjIpLnRvKGRldmljZSklMEFwaXBlLnNjaGVkdWxlciUyMCUzRCUyMFRDRFNjaGVkdWxlci5mcm9tX2NvbmZpZyhwaXBlLnNjaGVkdWxlci5jb25maWcpJTBBJTBBcGlwZS5sb2FkX2xvcmFfd2VpZ2h0cyh0Y2RfbG9yYV9pZCklMEFwaXBlLmZ1c2VfbG9yYSgpJTBBJTBBaW1nX3VybCUyMCUzRCUyMCUyMmh0dHBzJTNBJTJGJTJGcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSUyRkNvbXBWaXMlMkZsYXRlbnQtZGlmZnVzaW9uJTJGbWFpbiUyRmRhdGElMkZpbnBhaW50aW5nX2V4YW1wbGVzJTJGb3ZlcnR1cmUtY3JlYXRpb25zLTVzSTZmUWdZSXVvLnBuZyUyMiUwQW1hc2tfdXJsJTIwJTNEJTIwJTIyaHR0cHMlM0ElMkYlMkZyYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tJTJGQ29tcFZpcyUyRmxhdGVudC1kaWZmdXNpb24lMkZtYWluJTJGZGF0YSUyRmlucGFpbnRpbmdfZXhhbXBsZXMlMkZvdmVydHVyZS1jcmVhdGlvbnMtNXNJNmZRZ1lJdW9fbWFzay5wbmclMjIlMEElMEFpbml0X2ltYWdlJTIwJTNEJTIwbG9hZF9pbWFnZShpbWdfdXJsKS5yZXNpemUoKDEwMjQlMkMlMjAxMDI0KSklMEFtYXNrX2ltYWdlJTIwJTNEJTIwbG9hZF9pbWFnZShtYXNrX3VybCkucmVzaXplKCgxMDI0JTJDJTIwMTAyNCkpJTBBJTBBcHJvbXB0JTIwJTNEJTIwJTIyYSUyMHRpZ2VyJTIwc2l0dGluZyUyMG9uJTIwYSUyMHBhcmslMjBiZW5jaCUyMiUwQSUwQWltYWdlJTIwJTNEJTIwcGlwZSglMEElMjAlMjBwcm9tcHQlM0Rwcm9tcHQlMkMlMEElMjAlMjBpbWFnZSUzRGluaXRfaW1hZ2UlMkMlMEElMjAlMjBtYXNrX2ltYWdlJTNEbWFza19pbWFnZSUyQyUwQSUyMCUyMG51bV9pbmZlcmVuY2Vfc3RlcHMlM0Q4JTJDJTBBJTIwJTIwZ3VpZGFuY2Vfc2NhbGUlM0QwJTJDJTBBJTIwJTIwZXRhJTNEMC4zJTJDJTBBJTIwJTIwc3RyZW5ndGglM0QwLjk5JTJDJTIwJTIwJTIzJTIwbWFrZSUyMHN1cmUlMjB0byUyMHVzZSUyMCU2MHN0cmVuZ3RoJTYwJTIwYmVsb3clMjAxLjAlMEElMjAlMjBnZW5lcmF0b3IlM0R0b3JjaC5HZW5lcmF0b3IoZGV2aWNlJTNEZGV2aWNlKS5tYW51YWxfc2VlZCgwKSUyQyUwQSkuaW1hZ2VzJTVCMCU1RCUwQSUwQWdyaWRfaW1hZ2UlMjAlM0QlMjBtYWtlX2ltYWdlX2dyaWQoJTVCaW5pdF9pbWFnZSUyQyUyMG1hc2tfaW1hZ2UlMkMlMjBpbWFnZSU1RCUyQyUyMHJvd3MlM0QxJTJDJTIwY29scyUzRDMp",highlighted:`<span class="hljs-keyword">import</span> torch
<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> AutoPipelineForInpainting, TCDScheduler
<span class="hljs-keyword">from</span> diffusers.utils <span class="hljs-keyword">import</span> load_image, make_image_grid

device = <span class="hljs-string">&quot;cuda&quot;</span>
base_model_id = <span class="hljs-string">&quot;diffusers/stable-diffusion-xl-1.0-inpainting-0.1&quot;</span>
tcd_lora_id = <span class="hljs-string">&quot;h1t/TCD-SDXL-LoRA&quot;</span>

pipe = AutoPipelineForInpainting.from_pretrained(base_model_id, torch_dtype=torch.float16, variant=<span class="hljs-string">&quot;fp16&quot;</span>).to(device)
pipe.scheduler = TCDScheduler.from_config(pipe.scheduler.config)

pipe.load_lora_weights(tcd_lora_id)
pipe.fuse_lora()

img_url = <span class="hljs-string">&quot;https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo.png&quot;</span>
mask_url = <span class="hljs-string">&quot;https://raw.githubusercontent.com/CompVis/latent-diffusion/main/data/inpainting_examples/overture-creations-5sI6fQgYIuo_mask.png&quot;</span>

init_image = load_image(img_url).resize((<span class="hljs-number">1024</span>, <span class="hljs-number">1024</span>))
mask_image = load_image(mask_url).resize((<span class="hljs-number">1024</span>, <span class="hljs-number">1024</span>))

prompt = <span class="hljs-string">&quot;a tiger sitting on a park bench&quot;</span>

image = pipe(
  prompt=prompt,
  image=init_image,
  mask_image=mask_image,
  num_inference_steps=<span class="hljs-number">8</span>,
  guidance_scale=<span class="hljs-number">0</span>,
  eta=<span class="hljs-number">0.3</span>,
  strength=<span class="hljs-number">0.99</span>,  <span class="hljs-comment"># make sure to use \`strength\` below 1.0</span>
  generator=torch.Generator(device=device).manual_seed(<span class="hljs-number">0</span>),
).images[<span class="hljs-number">0</span>]

grid_image = make_image_grid([init_image, mask_image, image], rows=<span class="hljs-number">1</span>, cols=<span class="hljs-number">3</span>)`,wrap:!1}}),{c(){T(e.$$.fragment),c=d(),n=h("p"),n.innerHTML=M},l(i){w(e.$$.fragment,i),c=J(i),n=y(i,"P",{"data-svelte-h":!0}),W(n)!=="svelte-wsv6yl"&&(n.innerHTML=M)},m(i,o){b(e,i,o),a(i,c,o),a(i,n,o),p=!0},p:tl,i(i){p||(f(e.$$.fragment,i),p=!0)},o(i){U(e.$$.fragment,i),p=!1},d(i){i&&(s(c),s(n)),Z(e,i)}}}function me(I){let e,c,n,M;return e=new pl({props:{id:"tasks",option:"text-to-image",$$slots:{default:[oe]},$$scope:{ctx:I}}}),n=new pl({props:{id:"tasks",option:"inpainting",$$slots:{default:[re]},$$scope:{ctx:I}}}),{c(){T(e.$$.fragment),c=d(),T(n.$$.fragment)},l(p){w(e.$$.fragment,p),c=J(p),w(n.$$.fragment,p)},m(p,i){b(e,p,i),a(p,c,i),b(n,p,i),M=!0},p(p,i){const o={};i&2&&(o.$$scope={dirty:i,ctx:p}),e.$set(o);const u={};i&2&&(u.$$scope={dirty:i,ctx:p}),n.$set(u)},i(p){M||(f(e.$$.fragment,p),f(n.$$.fragment,p),M=!0)},o(p){U(e.$$.fragment,p),U(n.$$.fragment,p),M=!1},d(p){p&&s(c),Z(e,p),Z(n,p)}}}function ce(I){let e,c='Check out the <a href="merge_loras">Merge LoRAs</a> guide to learn more about efficient merging methods.';return{c(){e=h("p"),e.innerHTML=c},l(n){e=y(n,"P",{"data-svelte-h":!0}),W(e)!=="svelte-4z0umm"&&(e.innerHTML=c)},m(n,M){a(n,e,M)},p:tl,d(n){n&&s(e)}}}function Me(I){let e;return{c(){e=ae("The inference parameters in this example might not work for all examples, so we recommend you to try different values for `num_inference_steps`, `guidance_scale`, `controlnet_conditioning_scale` and `cross_attention_kwargs` parameters and choose the best one.")},l(c){e=te(c,"The inference parameters in this example might not work for all examples, so we recommend you to try different values for `num_inference_steps`, `guidance_scale`, `controlnet_conditioning_scale` and `cross_attention_kwargs` parameters and choose the best one.")},m(c,n){a(c,e,n)},d(c){c&&s(e)}}}function de(I){let e,c,n,M,p,i='<img src="https://github.com/jabir-zheng/TCD/raw/main/assets/controlnet_depth_tcd.png"/>',o,u,r,j,_,C,nl='<img src="https://github.com/jabir-zheng/TCD/raw/main/assets/controlnet_canny_tcd.png"/>',B,G,E;return e=new al({props:{title:"Depth ControlNet",local:"depth-controlnet",headingTag:"h3"}}),n=new R({props:{code:"aW1wb3J0JTIwdG9yY2glMEFpbXBvcnQlMjBudW1weSUyMGFzJTIwbnAlMEFmcm9tJTIwUElMJTIwaW1wb3J0JTIwSW1hZ2UlMEFmcm9tJTIwdHJhbnNmb3JtZXJzJTIwaW1wb3J0JTIwRFBUSW1hZ2VQcm9jZXNzb3IlMkMlMjBEUFRGb3JEZXB0aEVzdGltYXRpb24lMEFmcm9tJTIwZGlmZnVzZXJzJTIwaW1wb3J0JTIwQ29udHJvbE5ldE1vZGVsJTJDJTIwU3RhYmxlRGlmZnVzaW9uWExDb250cm9sTmV0UGlwZWxpbmUlMEFmcm9tJTIwZGlmZnVzZXJzLnV0aWxzJTIwaW1wb3J0JTIwbG9hZF9pbWFnZSUyQyUyMG1ha2VfaW1hZ2VfZ3JpZCUwQWZyb20lMjBzY2hlZHVsaW5nX3RjZCUyMGltcG9ydCUyMFRDRFNjaGVkdWxlciUwQSUwQWRldmljZSUyMCUzRCUyMCUyMmN1ZGElMjIlMEFkZXB0aF9lc3RpbWF0b3IlMjAlM0QlMjBEUFRGb3JEZXB0aEVzdGltYXRpb24uZnJvbV9wcmV0cmFpbmVkKCUyMkludGVsJTJGZHB0LWh5YnJpZC1taWRhcyUyMikudG8oZGV2aWNlKSUwQWZlYXR1cmVfZXh0cmFjdG9yJTIwJTNEJTIwRFBUSW1hZ2VQcm9jZXNzb3IuZnJvbV9wcmV0cmFpbmVkKCUyMkludGVsJTJGZHB0LWh5YnJpZC1taWRhcyUyMiklMEElMEFkZWYlMjBnZXRfZGVwdGhfbWFwKGltYWdlKSUzQSUwQSUyMCUyMCUyMCUyMGltYWdlJTIwJTNEJTIwZmVhdHVyZV9leHRyYWN0b3IoaW1hZ2VzJTNEaW1hZ2UlMkMlMjByZXR1cm5fdGVuc29ycyUzRCUyMnB0JTIyKS5waXhlbF92YWx1ZXMudG8oZGV2aWNlKSUwQSUyMCUyMCUyMCUyMHdpdGglMjB0b3JjaC5ub19ncmFkKCklMkMlMjB0b3JjaC5hdXRvY2FzdChkZXZpY2UpJTNBJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwZGVwdGhfbWFwJTIwJTNEJTIwZGVwdGhfZXN0aW1hdG9yKGltYWdlKS5wcmVkaWN0ZWRfZGVwdGglMEElMEElMjAlMjAlMjAlMjBkZXB0aF9tYXAlMjAlM0QlMjB0b3JjaC5ubi5mdW5jdGlvbmFsLmludGVycG9sYXRlKCUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMGRlcHRoX21hcC51bnNxdWVlemUoMSklMkMlMEElMjAlMjAlMjAlMjAlMjAlMjAlMjAlMjBzaXplJTNEKDEwMjQlMkMlMjAxMDI0KSUyQyUwQSUyMCUyMCUyMCUyMCUyMCUyMCUyMCUyMG1vZGUlM0QlMjJiaWN1YmljJTIyJTJDJTBBJTIwJTIwJTIwJTIwJTIwJTIwJTIwJTIwYWxpZ25fY29ybmVycyUzREZhbHNlJTJDJTBBJTIwJTIwJTIwJTIwKSUwQSUyMCUyMCUyMCUyMGRlcHRoX21pbiUyMCUzRCUyMHRvcmNoLmFtaW4oZGVwdGhfbWFwJTJDJTIwZGltJTNEJTVCMSUyQyUyMDIlMkMlMjAzJTVEJTJDJTIwa2VlcGRpbSUzRFRydWUpJTBBJTIwJTIwJTIwJTIwZGVwdGhfbWF4JTIwJTNEJTIwdG9yY2guYW1heChkZXB0aF9tYXAlMkMlMjBkaW0lM0QlNUIxJTJDJTIwMiUyQyUyMDMlNUQlMkMlMjBrZWVwZGltJTNEVHJ1ZSklMEElMjAlMjAlMjAlMjBkZXB0aF9tYXAlMjAlM0QlMjAoZGVwdGhfbWFwJTIwLSUyMGRlcHRoX21pbiklMjAlMkYlMjAoZGVwdGhfbWF4JTIwLSUyMGRlcHRoX21pbiklMEElMjAlMjAlMjAlMjBpbWFnZSUyMCUzRCUyMHRvcmNoLmNhdCglNUJkZXB0aF9tYXAlNUQlMjAqJTIwMyUyQyUyMGRpbSUzRDEpJTBBJTBBJTIwJTIwJTIwJTIwaW1hZ2UlMjAlM0QlMjBpbWFnZS5wZXJtdXRlKDAlMkMlMjAyJTJDJTIwMyUyQyUyMDEpLmNwdSgpLm51bXB5KCklNUIwJTVEJTBBJTIwJTIwJTIwJTIwaW1hZ2UlMjAlM0QlMjBJbWFnZS5mcm9tYXJyYXkoKGltYWdlJTIwKiUyMDI1NS4wKS5jbGlwKDAlMkMlMjAyNTUpLmFzdHlwZShucC51aW50OCkpJTBBJTIwJTIwJTIwJTIwcmV0dXJuJTIwaW1hZ2UlMEElMEFiYXNlX21vZGVsX2lkJTIwJTNEJTIwJTIyc3RhYmlsaXR5YWklMkZzdGFibGUtZGlmZnVzaW9uLXhsLWJhc2UtMS4wJTIyJTBBY29udHJvbG5ldF9pZCUyMCUzRCUyMCUyMmRpZmZ1c2VycyUyRmNvbnRyb2xuZXQtZGVwdGgtc2R4bC0xLjAlMjIlMEF0Y2RfbG9yYV9pZCUyMCUzRCUyMCUyMmgxdCUyRlRDRC1TRFhMLUxvUkElMjIlMEElMEFjb250cm9sbmV0JTIwJTNEJTIwQ29udHJvbE5ldE1vZGVsLmZyb21fcHJldHJhaW5lZCglMEElMjAlMjAlMjAlMjBjb250cm9sbmV0X2lkJTJDJTBBJTIwJTIwJTIwJTIwdG9yY2hfZHR5cGUlM0R0b3JjaC5mbG9hdDE2JTJDJTBBJTIwJTIwJTIwJTIwdmFyaWFudCUzRCUyMmZwMTYlMjIlMkMlMEEpJTBBcGlwZSUyMCUzRCUyMFN0YWJsZURpZmZ1c2lvblhMQ29udHJvbE5ldFBpcGVsaW5lLmZyb21fcHJldHJhaW5lZCglMEElMjAlMjAlMjAlMjBiYXNlX21vZGVsX2lkJTJDJTBBJTIwJTIwJTIwJTIwY29udHJvbG5ldCUzRGNvbnRyb2xuZXQlMkMlMEElMjAlMjAlMjAlMjB0b3JjaF9kdHlwZSUzRHRvcmNoLmZsb2F0MTYlMkMlMEElMjAlMjAlMjAlMjB2YXJpYW50JTNEJTIyZnAxNiUyMiUyQyUwQSklMEFwaXBlLmVuYWJsZV9tb2RlbF9jcHVfb2ZmbG9hZCgpJTBBJTBBcGlwZS5zY2hlZHVsZXIlMjAlM0QlMjBUQ0RTY2hlZHVsZXIuZnJvbV9jb25maWcocGlwZS5zY2hlZHVsZXIuY29uZmlnKSUwQSUwQXBpcGUubG9hZF9sb3JhX3dlaWdodHModGNkX2xvcmFfaWQpJTBBcGlwZS5mdXNlX2xvcmEoKSUwQSUwQXByb21wdCUyMCUzRCUyMCUyMnN0b3JtdHJvb3BlciUyMGxlY3R1cmUlMkMlMjBwaG90b3JlYWxpc3RpYyUyMiUwQSUwQWltYWdlJTIwJTNEJTIwbG9hZF9pbWFnZSglMjJodHRwcyUzQSUyRiUyRmh1Z2dpbmdmYWNlLmNvJTJGbGxseWFzdmllbCUyRnNkLWNvbnRyb2xuZXQtZGVwdGglMkZyZXNvbHZlJTJGbWFpbiUyRmltYWdlcyUyRnN0b3JtdHJvb3Blci5wbmclMjIpJTBBZGVwdGhfaW1hZ2UlMjAlM0QlMjBnZXRfZGVwdGhfbWFwKGltYWdlKSUwQSUwQWNvbnRyb2xuZXRfY29uZGl0aW9uaW5nX3NjYWxlJTIwJTNEJTIwMC41JTIwJTIwJTIzJTIwcmVjb21tZW5kZWQlMjBmb3IlMjBnb29kJTIwZ2VuZXJhbGl6YXRpb24lMEElMEFpbWFnZSUyMCUzRCUyMHBpcGUoJTBBJTIwJTIwJTIwJTIwcHJvbXB0JTJDJTBBJTIwJTIwJTIwJTIwaW1hZ2UlM0RkZXB0aF9pbWFnZSUyQyUwQSUyMCUyMCUyMCUyMG51bV9pbmZlcmVuY2Vfc3RlcHMlM0Q0JTJDJTBBJTIwJTIwJTIwJTIwZ3VpZGFuY2Vfc2NhbGUlM0QwJTJDJTBBJTIwJTIwJTIwJTIwZXRhJTNEMC4zJTJDJTBBJTIwJTIwJTIwJTIwY29udHJvbG5ldF9jb25kaXRpb25pbmdfc2NhbGUlM0Rjb250cm9sbmV0X2NvbmRpdGlvbmluZ19zY2FsZSUyQyUwQSUyMCUyMCUyMCUyMGdlbmVyYXRvciUzRHRvcmNoLkdlbmVyYXRvcihkZXZpY2UlM0RkZXZpY2UpLm1hbnVhbF9zZWVkKDApJTJDJTBBKS5pbWFnZXMlNUIwJTVEJTBBJTBBZ3JpZF9pbWFnZSUyMCUzRCUyMG1ha2VfaW1hZ2VfZ3JpZCglNUJkZXB0aF9pbWFnZSUyQyUyMGltYWdlJTVEJTJDJTIwcm93cyUzRDElMkMlMjBjb2xzJTNEMik=",highlighted:`<span class="hljs-keyword">import</span> torch
<span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np
<span class="hljs-keyword">from</span> PIL <span class="hljs-keyword">import</span> Image
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DPTImageProcessor, DPTForDepthEstimation
<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> ControlNetModel, StableDiffusionXLControlNetPipeline
<span class="hljs-keyword">from</span> diffusers.utils <span class="hljs-keyword">import</span> load_image, make_image_grid
<span class="hljs-keyword">from</span> scheduling_tcd <span class="hljs-keyword">import</span> TCDScheduler

device = <span class="hljs-string">&quot;cuda&quot;</span>
depth_estimator = DPTForDepthEstimation.from_pretrained(<span class="hljs-string">&quot;Intel/dpt-hybrid-midas&quot;</span>).to(device)
feature_extractor = DPTImageProcessor.from_pretrained(<span class="hljs-string">&quot;Intel/dpt-hybrid-midas&quot;</span>)

<span class="hljs-keyword">def</span> <span class="hljs-title function_">get_depth_map</span>(<span class="hljs-params">image</span>):
    image = feature_extractor(images=image, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).pixel_values.to(device)
    <span class="hljs-keyword">with</span> torch.no_grad(), torch.autocast(device):
        depth_map = depth_estimator(image).predicted_depth

    depth_map = torch.nn.functional.interpolate(
        depth_map.unsqueeze(<span class="hljs-number">1</span>),
        size=(<span class="hljs-number">1024</span>, <span class="hljs-number">1024</span>),
        mode=<span class="hljs-string">&quot;bicubic&quot;</span>,
        align_corners=<span class="hljs-literal">False</span>,
    )
    depth_min = torch.amin(depth_map, dim=[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>], keepdim=<span class="hljs-literal">True</span>)
    depth_max = torch.amax(depth_map, dim=[<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>], keepdim=<span class="hljs-literal">True</span>)
    depth_map = (depth_map - depth_min) / (depth_max - depth_min)
    image = torch.cat([depth_map] * <span class="hljs-number">3</span>, dim=<span class="hljs-number">1</span>)

    image = image.permute(<span class="hljs-number">0</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-number">1</span>).cpu().numpy()[<span class="hljs-number">0</span>]
    image = Image.fromarray((image * <span class="hljs-number">255.0</span>).clip(<span class="hljs-number">0</span>, <span class="hljs-number">255</span>).astype(np.uint8))
    <span class="hljs-keyword">return</span> image

base_model_id = <span class="hljs-string">&quot;stabilityai/stable-diffusion-xl-base-1.0&quot;</span>
controlnet_id = <span class="hljs-string">&quot;diffusers/controlnet-depth-sdxl-1.0&quot;</span>
tcd_lora_id = <span class="hljs-string">&quot;h1t/TCD-SDXL-LoRA&quot;</span>

controlnet = ControlNetModel.from_pretrained(
    controlnet_id,
    torch_dtype=torch.float16,
    variant=<span class="hljs-string">&quot;fp16&quot;</span>,
)
pipe = StableDiffusionXLControlNetPipeline.from_pretrained(
    base_model_id,
    controlnet=controlnet,
    torch_dtype=torch.float16,
    variant=<span class="hljs-string">&quot;fp16&quot;</span>,
)
pipe.enable_model_cpu_offload()

pipe.scheduler = TCDScheduler.from_config(pipe.scheduler.config)

pipe.load_lora_weights(tcd_lora_id)
pipe.fuse_lora()

prompt = <span class="hljs-string">&quot;stormtrooper lecture, photorealistic&quot;</span>

image = load_image(<span class="hljs-string">&quot;https://huggingface.co/lllyasviel/sd-controlnet-depth/resolve/main/images/stormtrooper.png&quot;</span>)
depth_image = get_depth_map(image)

controlnet_conditioning_scale = <span class="hljs-number">0.5</span>  <span class="hljs-comment"># recommended for good generalization</span>

image = pipe(
    prompt,
    image=depth_image,
    num_inference_steps=<span class="hljs-number">4</span>,
    guidance_scale=<span class="hljs-number">0</span>,
    eta=<span class="hljs-number">0.3</span>,
    controlnet_conditioning_scale=controlnet_conditioning_scale,
    generator=torch.Generator(device=device).manual_seed(<span class="hljs-number">0</span>),
).images[<span class="hljs-number">0</span>]

grid_image = make_image_grid([depth_image, image], rows=<span class="hljs-number">1</span>, cols=<span class="hljs-number">2</span>)`,wrap:!1}}),u=new al({props:{title:"Canny ControlNet",local:"canny-controlnet",headingTag:"h3"}}),j=new R({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwZGlmZnVzZXJzJTIwaW1wb3J0JTIwQ29udHJvbE5ldE1vZGVsJTJDJTIwU3RhYmxlRGlmZnVzaW9uWExDb250cm9sTmV0UGlwZWxpbmUlMEFmcm9tJTIwZGlmZnVzZXJzLnV0aWxzJTIwaW1wb3J0JTIwbG9hZF9pbWFnZSUyQyUyMG1ha2VfaW1hZ2VfZ3JpZCUwQWZyb20lMjBzY2hlZHVsaW5nX3RjZCUyMGltcG9ydCUyMFRDRFNjaGVkdWxlciUwQSUwQWRldmljZSUyMCUzRCUyMCUyMmN1ZGElMjIlMEFiYXNlX21vZGVsX2lkJTIwJTNEJTIwJTIyc3RhYmlsaXR5YWklMkZzdGFibGUtZGlmZnVzaW9uLXhsLWJhc2UtMS4wJTIyJTBBY29udHJvbG5ldF9pZCUyMCUzRCUyMCUyMmRpZmZ1c2VycyUyRmNvbnRyb2xuZXQtY2Fubnktc2R4bC0xLjAlMjIlMEF0Y2RfbG9yYV9pZCUyMCUzRCUyMCUyMmgxdCUyRlRDRC1TRFhMLUxvUkElMjIlMEElMEFjb250cm9sbmV0JTIwJTNEJTIwQ29udHJvbE5ldE1vZGVsLmZyb21fcHJldHJhaW5lZCglMEElMjAlMjAlMjAlMjBjb250cm9sbmV0X2lkJTJDJTBBJTIwJTIwJTIwJTIwdG9yY2hfZHR5cGUlM0R0b3JjaC5mbG9hdDE2JTJDJTBBJTIwJTIwJTIwJTIwdmFyaWFudCUzRCUyMmZwMTYlMjIlMkMlMEEpJTBBcGlwZSUyMCUzRCUyMFN0YWJsZURpZmZ1c2lvblhMQ29udHJvbE5ldFBpcGVsaW5lLmZyb21fcHJldHJhaW5lZCglMEElMjAlMjAlMjAlMjBiYXNlX21vZGVsX2lkJTJDJTBBJTIwJTIwJTIwJTIwY29udHJvbG5ldCUzRGNvbnRyb2xuZXQlMkMlMEElMjAlMjAlMjAlMjB0b3JjaF9kdHlwZSUzRHRvcmNoLmZsb2F0MTYlMkMlMEElMjAlMjAlMjAlMjB2YXJpYW50JTNEJTIyZnAxNiUyMiUyQyUwQSklMEFwaXBlLmVuYWJsZV9tb2RlbF9jcHVfb2ZmbG9hZCgpJTBBJTBBcGlwZS5zY2hlZHVsZXIlMjAlM0QlMjBUQ0RTY2hlZHVsZXIuZnJvbV9jb25maWcocGlwZS5zY2hlZHVsZXIuY29uZmlnKSUwQSUwQXBpcGUubG9hZF9sb3JhX3dlaWdodHModGNkX2xvcmFfaWQpJTBBcGlwZS5mdXNlX2xvcmEoKSUwQSUwQXByb21wdCUyMCUzRCUyMCUyMnVsdHJhcmVhbGlzdGljJTIwc2hvdCUyMG9mJTIwYSUyMGZ1cnJ5JTIwYmx1ZSUyMGJpcmQlMjIlMEElMEFjYW5ueV9pbWFnZSUyMCUzRCUyMGxvYWRfaW1hZ2UoJTIyaHR0cHMlM0ElMkYlMkZodWdnaW5nZmFjZS5jbyUyRmRhdGFzZXRzJTJGaGYtaW50ZXJuYWwtdGVzdGluZyUyRmRpZmZ1c2Vycy1pbWFnZXMlMkZyZXNvbHZlJTJGbWFpbiUyRnNkX2NvbnRyb2xuZXQlMkZiaXJkX2Nhbm55LnBuZyUyMiklMEElMEFjb250cm9sbmV0X2NvbmRpdGlvbmluZ19zY2FsZSUyMCUzRCUyMDAuNSUyMCUyMCUyMyUyMHJlY29tbWVuZGVkJTIwZm9yJTIwZ29vZCUyMGdlbmVyYWxpemF0aW9uJTBBJTBBaW1hZ2UlMjAlM0QlMjBwaXBlKCUwQSUyMCUyMCUyMCUyMHByb21wdCUyQyUwQSUyMCUyMCUyMCUyMGltYWdlJTNEY2FubnlfaW1hZ2UlMkMlMEElMjAlMjAlMjAlMjBudW1faW5mZXJlbmNlX3N0ZXBzJTNENCUyQyUwQSUyMCUyMCUyMCUyMGd1aWRhbmNlX3NjYWxlJTNEMCUyQyUwQSUyMCUyMCUyMCUyMGV0YSUzRDAuMyUyQyUwQSUyMCUyMCUyMCUyMGNvbnRyb2xuZXRfY29uZGl0aW9uaW5nX3NjYWxlJTNEY29udHJvbG5ldF9jb25kaXRpb25pbmdfc2NhbGUlMkMlMEElMjAlMjAlMjAlMjBnZW5lcmF0b3IlM0R0b3JjaC5HZW5lcmF0b3IoZGV2aWNlJTNEZGV2aWNlKS5tYW51YWxfc2VlZCgwKSUyQyUwQSkuaW1hZ2VzJTVCMCU1RCUwQSUwQWdyaWRfaW1hZ2UlMjAlM0QlMjBtYWtlX2ltYWdlX2dyaWQoJTVCY2FubnlfaW1hZ2UlMkMlMjBpbWFnZSU1RCUyQyUyMHJvd3MlM0QxJTJDJTIwY29scyUzRDIp",highlighted:`<span class="hljs-keyword">import</span> torch
<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> ControlNetModel, StableDiffusionXLControlNetPipeline
<span class="hljs-keyword">from</span> diffusers.utils <span class="hljs-keyword">import</span> load_image, make_image_grid
<span class="hljs-keyword">from</span> scheduling_tcd <span class="hljs-keyword">import</span> TCDScheduler

device = <span class="hljs-string">&quot;cuda&quot;</span>
base_model_id = <span class="hljs-string">&quot;stabilityai/stable-diffusion-xl-base-1.0&quot;</span>
controlnet_id = <span class="hljs-string">&quot;diffusers/controlnet-canny-sdxl-1.0&quot;</span>
tcd_lora_id = <span class="hljs-string">&quot;h1t/TCD-SDXL-LoRA&quot;</span>

controlnet = ControlNetModel.from_pretrained(
    controlnet_id,
    torch_dtype=torch.float16,
    variant=<span class="hljs-string">&quot;fp16&quot;</span>,
)
pipe = StableDiffusionXLControlNetPipeline.from_pretrained(
    base_model_id,
    controlnet=controlnet,
    torch_dtype=torch.float16,
    variant=<span class="hljs-string">&quot;fp16&quot;</span>,
)
pipe.enable_model_cpu_offload()

pipe.scheduler = TCDScheduler.from_config(pipe.scheduler.config)

pipe.load_lora_weights(tcd_lora_id)
pipe.fuse_lora()

prompt = <span class="hljs-string">&quot;ultrarealistic shot of a furry blue bird&quot;</span>

canny_image = load_image(<span class="hljs-string">&quot;https://huggingface.co/datasets/hf-internal-testing/diffusers-images/resolve/main/sd_controlnet/bird_canny.png&quot;</span>)

controlnet_conditioning_scale = <span class="hljs-number">0.5</span>  <span class="hljs-comment"># recommended for good generalization</span>

image = pipe(
    prompt,
    image=canny_image,
    num_inference_steps=<span class="hljs-number">4</span>,
    guidance_scale=<span class="hljs-number">0</span>,
    eta=<span class="hljs-number">0.3</span>,
    controlnet_conditioning_scale=controlnet_conditioning_scale,
    generator=torch.Generator(device=device).manual_seed(<span class="hljs-number">0</span>),
).images[<span class="hljs-number">0</span>]

grid_image = make_image_grid([canny_image, image], rows=<span class="hljs-number">1</span>, cols=<span class="hljs-number">2</span>)`,wrap:!1}}),G=new Bl({props:{$$slots:{default:[Me]},$$scope:{ctx:I}}}),{c(){T(e.$$.fragment),c=d(),T(n.$$.fragment),M=d(),p=h("p"),p.innerHTML=i,o=d(),T(u.$$.fragment),r=d(),T(j.$$.fragment),_=d(),C=h("p"),C.innerHTML=nl,B=d(),T(G.$$.fragment)},l(m){w(e.$$.fragment,m),c=J(m),w(n.$$.fragment,m),M=J(m),p=y(m,"P",{"data-svelte-h":!0}),W(p)!=="svelte-jfsnb4"&&(p.innerHTML=i),o=J(m),w(u.$$.fragment,m),r=J(m),w(j.$$.fragment,m),_=J(m),C=y(m,"P",{"data-svelte-h":!0}),W(C)!=="svelte-x8em4a"&&(C.innerHTML=nl),B=J(m),w(G.$$.fragment,m)},m(m,g){b(e,m,g),a(m,c,g),b(n,m,g),a(m,M,g),a(m,p,g),a(m,o,g),b(u,m,g),a(m,r,g),b(j,m,g),a(m,_,g),a(m,C,g),a(m,B,g),b(G,m,g),E=!0},p(m,g){const F={};g&2&&(F.$$scope={dirty:g,ctx:m}),G.$set(F)},i(m){E||(f(e.$$.fragment,m),f(n.$$.fragment,m),f(u.$$.fragment,m),f(j.$$.fragment,m),f(G.$$.fragment,m),E=!0)},o(m){U(e.$$.fragment,m),U(n.$$.fragment,m),U(u.$$.fragment,m),U(j.$$.fragment,m),U(G.$$.fragment,m),E=!1},d(m){m&&(s(c),s(M),s(p),s(o),s(r),s(_),s(C),s(B)),Z(e,m),Z(n,m),Z(u,m),Z(j,m),Z(G,m)}}}function Je(I){let e,c='This example shows how to use the TCD-LoRA with the <a href="https://github.com/tencent-ailab/IP-Adapter/tree/main" rel="nofollow">IP-Adapter</a> and SDXL.',n,M,p,i,o='<img src="https://github.com/jabir-zheng/TCD/raw/main/assets/ip_adapter.png"/>',u;return M=new R({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwZGlmZnVzZXJzJTIwaW1wb3J0JTIwU3RhYmxlRGlmZnVzaW9uWExQaXBlbGluZSUwQWZyb20lMjBkaWZmdXNlcnMudXRpbHMlMjBpbXBvcnQlMjBsb2FkX2ltYWdlJTJDJTIwbWFrZV9pbWFnZV9ncmlkJTBBJTBBZnJvbSUyMGlwX2FkYXB0ZXIlMjBpbXBvcnQlMjBJUEFkYXB0ZXJYTCUwQWZyb20lMjBzY2hlZHVsaW5nX3RjZCUyMGltcG9ydCUyMFRDRFNjaGVkdWxlciUwQSUwQWRldmljZSUyMCUzRCUyMCUyMmN1ZGElMjIlMEFiYXNlX21vZGVsX3BhdGglMjAlM0QlMjAlMjJzdGFiaWxpdHlhaSUyRnN0YWJsZS1kaWZmdXNpb24teGwtYmFzZS0xLjAlMjIlMEFpbWFnZV9lbmNvZGVyX3BhdGglMjAlM0QlMjAlMjJzZHhsX21vZGVscyUyRmltYWdlX2VuY29kZXIlMjIlMEFpcF9ja3B0JTIwJTNEJTIwJTIyc2R4bF9tb2RlbHMlMkZpcC1hZGFwdGVyX3NkeGwuYmluJTIyJTBBdGNkX2xvcmFfaWQlMjAlM0QlMjAlMjJoMXQlMkZUQ0QtU0RYTC1Mb1JBJTIyJTBBJTBBcGlwZSUyMCUzRCUyMFN0YWJsZURpZmZ1c2lvblhMUGlwZWxpbmUuZnJvbV9wcmV0cmFpbmVkKCUwQSUyMCUyMCUyMCUyMGJhc2VfbW9kZWxfcGF0aCUyQyUwQSUyMCUyMCUyMCUyMHRvcmNoX2R0eXBlJTNEdG9yY2guZmxvYXQxNiUyQyUwQSUyMCUyMCUyMCUyMHZhcmlhbnQlM0QlMjJmcDE2JTIyJTBBKSUwQXBpcGUuc2NoZWR1bGVyJTIwJTNEJTIwVENEU2NoZWR1bGVyLmZyb21fY29uZmlnKHBpcGUuc2NoZWR1bGVyLmNvbmZpZyklMEElMEFwaXBlLmxvYWRfbG9yYV93ZWlnaHRzKHRjZF9sb3JhX2lkKSUwQXBpcGUuZnVzZV9sb3JhKCklMEElMEFpcF9tb2RlbCUyMCUzRCUyMElQQWRhcHRlclhMKHBpcGUlMkMlMjBpbWFnZV9lbmNvZGVyX3BhdGglMkMlMjBpcF9ja3B0JTJDJTIwZGV2aWNlKSUwQSUwQXJlZl9pbWFnZSUyMCUzRCUyMGxvYWRfaW1hZ2UoJTIyaHR0cHMlM0ElMkYlMkZyYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tJTJGdGVuY2VudC1haWxhYiUyRklQLUFkYXB0ZXIlMkZtYWluJTJGYXNzZXRzJTJGaW1hZ2VzJTJGd29tYW4ucG5nJTIyKS5yZXNpemUoKDUxMiUyQyUyMDUxMikpJTBBJTBBcHJvbXB0JTIwJTNEJTIwJTIyYmVzdCUyMHF1YWxpdHklMkMlMjBoaWdoJTIwcXVhbGl0eSUyQyUyMHdlYXJpbmclMjBzdW5nbGFzc2VzJTIyJTBBJTBBaW1hZ2UlMjAlM0QlMjBpcF9tb2RlbC5nZW5lcmF0ZSglMEElMjAlMjAlMjAlMjBwaWxfaW1hZ2UlM0RyZWZfaW1hZ2UlMkMlMEElMjAlMjAlMjAlMjBwcm9tcHQlM0Rwcm9tcHQlMkMlMEElMjAlMjAlMjAlMjBzY2FsZSUzRDAuNSUyQyUwQSUyMCUyMCUyMCUyMG51bV9zYW1wbGVzJTNEMSUyQyUwQSUyMCUyMCUyMCUyMG51bV9pbmZlcmVuY2Vfc3RlcHMlM0Q0JTJDJTBBJTIwJTIwJTIwJTIwZ3VpZGFuY2Vfc2NhbGUlM0QwJTJDJTBBJTIwJTIwJTIwJTIwZXRhJTNEMC4zJTJDJTBBJTIwJTIwJTIwJTIwc2VlZCUzRDAlMkMlMEEpJTVCMCU1RCUwQSUwQWdyaWRfaW1hZ2UlMjAlM0QlMjBtYWtlX2ltYWdlX2dyaWQoJTVCcmVmX2ltYWdlJTJDJTIwaW1hZ2UlNUQlMkMlMjByb3dzJTNEMSUyQyUyMGNvbHMlM0QyKQ==",highlighted:`<span class="hljs-keyword">import</span> torch
<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> StableDiffusionXLPipeline
<span class="hljs-keyword">from</span> diffusers.utils <span class="hljs-keyword">import</span> load_image, make_image_grid

<span class="hljs-keyword">from</span> ip_adapter <span class="hljs-keyword">import</span> IPAdapterXL
<span class="hljs-keyword">from</span> scheduling_tcd <span class="hljs-keyword">import</span> TCDScheduler

device = <span class="hljs-string">&quot;cuda&quot;</span>
base_model_path = <span class="hljs-string">&quot;stabilityai/stable-diffusion-xl-base-1.0&quot;</span>
image_encoder_path = <span class="hljs-string">&quot;sdxl_models/image_encoder&quot;</span>
ip_ckpt = <span class="hljs-string">&quot;sdxl_models/ip-adapter_sdxl.bin&quot;</span>
tcd_lora_id = <span class="hljs-string">&quot;h1t/TCD-SDXL-LoRA&quot;</span>

pipe = StableDiffusionXLPipeline.from_pretrained(
    base_model_path,
    torch_dtype=torch.float16,
    variant=<span class="hljs-string">&quot;fp16&quot;</span>
)
pipe.scheduler = TCDScheduler.from_config(pipe.scheduler.config)

pipe.load_lora_weights(tcd_lora_id)
pipe.fuse_lora()

ip_model = IPAdapterXL(pipe, image_encoder_path, ip_ckpt, device)

ref_image = load_image(<span class="hljs-string">&quot;https://raw.githubusercontent.com/tencent-ailab/IP-Adapter/main/assets/images/woman.png&quot;</span>).resize((<span class="hljs-number">512</span>, <span class="hljs-number">512</span>))

prompt = <span class="hljs-string">&quot;best quality, high quality, wearing sunglasses&quot;</span>

image = ip_model.generate(
    pil_image=ref_image,
    prompt=prompt,
    scale=<span class="hljs-number">0.5</span>,
    num_samples=<span class="hljs-number">1</span>,
    num_inference_steps=<span class="hljs-number">4</span>,
    guidance_scale=<span class="hljs-number">0</span>,
    eta=<span class="hljs-number">0.3</span>,
    seed=<span class="hljs-number">0</span>,
)[<span class="hljs-number">0</span>]

grid_image = make_image_grid([ref_image, image], rows=<span class="hljs-number">1</span>, cols=<span class="hljs-number">2</span>)`,wrap:!1}}),{c(){e=h("p"),e.innerHTML=c,n=d(),T(M.$$.fragment),p=d(),i=h("p"),i.innerHTML=o},l(r){e=y(r,"P",{"data-svelte-h":!0}),W(e)!=="svelte-fqwnz0"&&(e.innerHTML=c),n=J(r),w(M.$$.fragment,r),p=J(r),i=y(r,"P",{"data-svelte-h":!0}),W(i)!=="svelte-1nkh4zf"&&(i.innerHTML=o)},m(r,j){a(r,e,j),a(r,n,j),b(M,r,j),a(r,p,j),a(r,i,j),u=!0},p:tl,i(r){u||(f(M.$$.fragment,r),u=!0)},o(r){U(M.$$.fragment,r),u=!1},d(r){r&&(s(e),s(n),s(p),s(i)),Z(M,r)}}}function ue(I){let e,c="<code>AnimateDiff</code> allows animating images using Stable Diffusion models. TCD-LoRA can substantially accelerate the process without degrading image quality. The quality of animation with TCD-LoRA and AnimateDiff has a more lucid outcome.",n,M,p,i,o='<img src="https://github.com/jabir-zheng/TCD/raw/main/assets/animation_example.gif"/>',u;return M=new R({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwZGlmZnVzZXJzJTIwaW1wb3J0JTIwTW90aW9uQWRhcHRlciUyQyUyMEFuaW1hdGVEaWZmUGlwZWxpbmUlMkMlMjBERElNU2NoZWR1bGVyJTBBZnJvbSUyMHNjaGVkdWxpbmdfdGNkJTIwaW1wb3J0JTIwVENEU2NoZWR1bGVyJTBBZnJvbSUyMGRpZmZ1c2Vycy51dGlscyUyMGltcG9ydCUyMGV4cG9ydF90b19naWYlMEElMEFhZGFwdGVyJTIwJTNEJTIwTW90aW9uQWRhcHRlci5mcm9tX3ByZXRyYWluZWQoJTIyZ3VveXd3JTJGYW5pbWF0ZWRpZmYtbW90aW9uLWFkYXB0ZXItdjEtNSUyMiklMEFwaXBlJTIwJTNEJTIwQW5pbWF0ZURpZmZQaXBlbGluZS5mcm9tX3ByZXRyYWluZWQoJTBBJTIwJTIwJTIwJTIwJTIyZnJhbmtqb3NodWElMkZ0b29ueW91X2JldGE2JTIyJTJDJTBBJTIwJTIwJTIwJTIwbW90aW9uX2FkYXB0ZXIlM0RhZGFwdGVyJTJDJTBBKS50byglMjJjdWRhJTIyKSUwQSUwQSUyMyUyMHNldCUyMFRDRFNjaGVkdWxlciUwQXBpcGUuc2NoZWR1bGVyJTIwJTNEJTIwVENEU2NoZWR1bGVyLmZyb21fY29uZmlnKHBpcGUuc2NoZWR1bGVyLmNvbmZpZyklMEElMEElMjMlMjBsb2FkJTIwVENEJTIwTG9SQSUwQXBpcGUubG9hZF9sb3JhX3dlaWdodHMoJTIyaDF0JTJGVENELVNEMTUtTG9SQSUyMiUyQyUyMGFkYXB0ZXJfbmFtZSUzRCUyMnRjZCUyMiklMEFwaXBlLmxvYWRfbG9yYV93ZWlnaHRzKCUyMmd1b3l3dyUyRmFuaW1hdGVkaWZmLW1vdGlvbi1sb3JhLXpvb20taW4lMjIlMkMlMjB3ZWlnaHRfbmFtZSUzRCUyMmRpZmZ1c2lvbl9weXRvcmNoX21vZGVsLnNhZmV0ZW5zb3JzJTIyJTJDJTIwYWRhcHRlcl9uYW1lJTNEJTIybW90aW9uLWxvcmElMjIpJTBBJTBBcGlwZS5zZXRfYWRhcHRlcnMoJTVCJTIydGNkJTIyJTJDJTIwJTIybW90aW9uLWxvcmElMjIlNUQlMkMlMjBhZGFwdGVyX3dlaWdodHMlM0QlNUIxLjAlMkMlMjAxLjIlNUQpJTBBJTBBcHJvbXB0JTIwJTNEJTIwJTIyYmVzdCUyMHF1YWxpdHklMkMlMjBtYXN0ZXJwaWVjZSUyQyUyMDFnaXJsJTJDJTIwbG9va2luZyUyMGF0JTIwdmlld2VyJTJDJTIwYmx1cnJ5JTIwYmFja2dyb3VuZCUyQyUyMHVwcGVyJTIwYm9keSUyQyUyMGNvbnRlbXBvcmFyeSUyQyUyMGRyZXNzJTIyJTBBZ2VuZXJhdG9yJTIwJTNEJTIwdG9yY2gubWFudWFsX3NlZWQoMCklMEFmcmFtZXMlMjAlM0QlMjBwaXBlKCUwQSUyMCUyMCUyMCUyMHByb21wdCUzRHByb21wdCUyQyUwQSUyMCUyMCUyMCUyMG51bV9pbmZlcmVuY2Vfc3RlcHMlM0Q1JTJDJTBBJTIwJTIwJTIwJTIwZ3VpZGFuY2Vfc2NhbGUlM0QwJTJDJTBBJTIwJTIwJTIwJTIwY3Jvc3NfYXR0ZW50aW9uX2t3YXJncyUzRCU3QiUyMnNjYWxlJTIyJTNBJTIwMSU3RCUyQyUwQSUyMCUyMCUyMCUyMG51bV9mcmFtZXMlM0QyNCUyQyUwQSUyMCUyMCUyMCUyMGV0YSUzRDAuMyUyQyUwQSUyMCUyMCUyMCUyMGdlbmVyYXRvciUzRGdlbmVyYXRvciUwQSkuZnJhbWVzJTVCMCU1RCUwQWV4cG9ydF90b19naWYoZnJhbWVzJTJDJTIwJTIyYW5pbWF0aW9uLmdpZiUyMik=",highlighted:`<span class="hljs-keyword">import</span> torch
<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> MotionAdapter, AnimateDiffPipeline, DDIMScheduler
<span class="hljs-keyword">from</span> scheduling_tcd <span class="hljs-keyword">import</span> TCDScheduler
<span class="hljs-keyword">from</span> diffusers.utils <span class="hljs-keyword">import</span> export_to_gif

adapter = MotionAdapter.from_pretrained(<span class="hljs-string">&quot;guoyww/animatediff-motion-adapter-v1-5&quot;</span>)
pipe = AnimateDiffPipeline.from_pretrained(
    <span class="hljs-string">&quot;frankjoshua/toonyou_beta6&quot;</span>,
    motion_adapter=adapter,
).to(<span class="hljs-string">&quot;cuda&quot;</span>)

<span class="hljs-comment"># set TCDScheduler</span>
pipe.scheduler = TCDScheduler.from_config(pipe.scheduler.config)

<span class="hljs-comment"># load TCD LoRA</span>
pipe.load_lora_weights(<span class="hljs-string">&quot;h1t/TCD-SD15-LoRA&quot;</span>, adapter_name=<span class="hljs-string">&quot;tcd&quot;</span>)
pipe.load_lora_weights(<span class="hljs-string">&quot;guoyww/animatediff-motion-lora-zoom-in&quot;</span>, weight_name=<span class="hljs-string">&quot;diffusion_pytorch_model.safetensors&quot;</span>, adapter_name=<span class="hljs-string">&quot;motion-lora&quot;</span>)

pipe.set_adapters([<span class="hljs-string">&quot;tcd&quot;</span>, <span class="hljs-string">&quot;motion-lora&quot;</span>], adapter_weights=[<span class="hljs-number">1.0</span>, <span class="hljs-number">1.2</span>])

prompt = <span class="hljs-string">&quot;best quality, masterpiece, 1girl, looking at viewer, blurry background, upper body, contemporary, dress&quot;</span>
generator = torch.manual_seed(<span class="hljs-number">0</span>)
frames = pipe(
    prompt=prompt,
    num_inference_steps=<span class="hljs-number">5</span>,
    guidance_scale=<span class="hljs-number">0</span>,
    cross_attention_kwargs={<span class="hljs-string">&quot;scale&quot;</span>: <span class="hljs-number">1</span>},
    num_frames=<span class="hljs-number">24</span>,
    eta=<span class="hljs-number">0.3</span>,
    generator=generator
).frames[<span class="hljs-number">0</span>]
export_to_gif(frames, <span class="hljs-string">&quot;animation.gif&quot;</span>)`,wrap:!1}}),{c(){e=h("p"),e.innerHTML=c,n=d(),T(M.$$.fragment),p=d(),i=h("p"),i.innerHTML=o},l(r){e=y(r,"P",{"data-svelte-h":!0}),W(e)!=="svelte-nxio7r"&&(e.innerHTML=c),n=J(r),w(M.$$.fragment,r),p=J(r),i=y(r,"P",{"data-svelte-h":!0}),W(i)!=="svelte-it1yry"&&(i.innerHTML=o)},m(r,j){a(r,e,j),a(r,n,j),b(M,r,j),a(r,p,j),a(r,i,j),u=!0},p:tl,i(r){u||(f(M.$$.fragment,r),u=!0)},o(r){U(M.$$.fragment,r),u=!1},d(r){r&&(s(e),s(n),s(p),s(i)),Z(M,r)}}}function he(I){let e,c,n,M,p,i;return e=new pl({props:{id:"adapters",option:"ControlNet",$$slots:{default:[de]},$$scope:{ctx:I}}}),n=new pl({props:{id:"adapters",option:"IP-Adapter",$$slots:{default:[Je]},$$scope:{ctx:I}}}),p=new pl({props:{id:"adapters",option:"AnimateDiff",$$slots:{default:[ue]},$$scope:{ctx:I}}}),{c(){T(e.$$.fragment),c=d(),T(n.$$.fragment),M=d(),T(p.$$.fragment)},l(o){w(e.$$.fragment,o),c=J(o),w(n.$$.fragment,o),M=J(o),w(p.$$.fragment,o)},m(o,u){b(e,o,u),a(o,c,u),b(n,o,u),a(o,M,u),b(p,o,u),i=!0},p(o,u){const r={};u&2&&(r.$$scope={dirty:u,ctx:o}),e.$set(r);const j={};u&2&&(j.$$scope={dirty:u,ctx:o}),n.$set(j);const _={};u&2&&(_.$$scope={dirty:u,ctx:o}),p.$set(_)},i(o){i||(f(e.$$.fragment,o),f(n.$$.fragment,o),f(p.$$.fragment,o),i=!0)},o(o){U(e.$$.fragment,o),U(n.$$.fragment,o),U(p.$$.fragment,o),i=!1},d(o){o&&(s(c),s(M)),Z(e,o),Z(n,o),Z(p,o)}}}function ye(I){let e,c,n,M,p,i,o,u,r,j="Trajectory Consistency Distillation (TCD) enables a model to generate higher quality and more detailed images with fewer steps. Moreover, owing to the effective error mitigation during the distillation process, TCD demonstrates superior performance even under conditions of large inference steps.",_,C,nl="The major advantages of TCD are:",B,G,E='<li><p>Better than Teacher: TCD demonstrates superior generative quality at both small and large inference steps and exceeds the performance of <a href="../../api/schedulers/multistep_dpm_solver">DPM-Solver++(2S)</a> with Stable Diffusion XL (SDXL). There is no additional discriminator or LPIPS supervision included during TCD training.</p></li> <li><p>Flexible Inference Steps: The inference steps for TCD sampling can be freely adjusted without adversely affecting the image quality.</p></li> <li><p>Freely change detail level: During inference, the level of detail in the image can be adjusted with a single hyperparameter, <em>gamma</em>.</p></li>',m,g,F,Y,Rl='For large models like SDXL, TCD is trained with <a href="https://huggingface.co/docs/peft/conceptual_guides/adapter#low-rank-adaptation-lora" rel="nofollow">LoRA</a> to reduce memory usage. This is also useful because you can reuse LoRAs between different finetuned models, as long as they share the same base model, without further training.',ol,N,Xl="This guide will show you how to perform inference with TCD-LoRAs for a variety of tasks like text-to-image and inpainting, as well as how you can easily combine TCD-LoRAs with other adapters. Choose one of the supported base model and it’s corresponding TCD-LoRA checkpoint from the table below to get started.",rl,S,kl='<thead><tr><th>Base model</th> <th>TCD-LoRA checkpoint</th></tr></thead> <tbody><tr><td><a href="https://huggingface.co/stable-diffusion-v1-5/stable-diffusion-v1-5" rel="nofollow">stable-diffusion-v1-5</a></td> <td><a href="https://huggingface.co/h1t/TCD-SD15-LoRA" rel="nofollow">TCD-SD15</a></td></tr> <tr><td><a href="https://huggingface.co/stabilityai/stable-diffusion-2-1-base" rel="nofollow">stable-diffusion-2-1-base</a></td> <td><a href="https://huggingface.co/h1t/TCD-SD21-base-LoRA" rel="nofollow">TCD-SD21-base</a></td></tr> <tr><td><a href="https://huggingface.co/stabilityai/stable-diffusion-xl-base-1.0" rel="nofollow">stable-diffusion-xl-base-1.0</a></td> <td><a href="https://huggingface.co/h1t/TCD-SDXL-LoRA" rel="nofollow">TCD-SDXL</a></td></tr></tbody>',ml,v,Vl='Make sure you have <a href="https://github.com/huggingface/peft" rel="nofollow">PEFT</a> installed for better LoRA support.',cl,Q,Ml,$,dl,D,El='In this guide, let’s use the <a href="/docs/diffusers/v0.33.1/en/api/pipelines/stable_diffusion/stable_diffusion_xl#diffusers.StableDiffusionXLPipeline">StableDiffusionXLPipeline</a> and the <a href="/docs/diffusers/v0.33.1/en/api/schedulers/tcd#diffusers.TCDScheduler">TCDScheduler</a>. Use the <a href="/docs/diffusers/v0.33.1/en/api/loaders/lora#diffusers.loaders.StableDiffusionLoraLoaderMixin.load_lora_weights">load_lora_weights()</a> method to load the SDXL-compatible TCD-LoRA weights.',Jl,z,Fl="A few tips to keep in mind for TCD-LoRA inference are to:",ul,A,Yl='<li>Keep the <code>num_inference_steps</code> between 4 and 50</li> <li>Set <code>eta</code> (used to control stochasticity at each step) between 0 and 1. You should use a higher <code>eta</code> when increasing the number of inference steps, but the downside is that a larger <code>eta</code> in <a href="/docs/diffusers/v0.33.1/en/api/schedulers/tcd#diffusers.TCDScheduler">TCDScheduler</a> leads to blurrier images. A value of 0.3 is recommended to produce good results.</li>',hl,X,yl,H,Tl,x,Nl='TCD-LoRA also works with many community finetuned models and plugins. For example, load the <a href="https://huggingface.co/cagliostrolab/animagine-xl-3.0" rel="nofollow">animagine-xl-3.0</a> checkpoint which is a community finetuned version of SDXL for generating anime images.',wl,L,bl,q,Sl='<img src="https://github.com/jabir-zheng/TCD/raw/main/assets/animagine_xl.png"/>',fl,P,vl='TCD-LoRA also supports other LoRAs trained on different styles. For example, let’s load the <a href="https://huggingface.co/TheLastBen/Papercut_SDXL" rel="nofollow">TheLastBen/Papercut_SDXL</a> LoRA and fuse it with the TCD-LoRA with the <code>~loaders.UNet2DConditionLoadersMixin.set_adapters</code> method.',Ul,k,Zl,K,jl,O,Ql='<img src="https://github.com/jabir-zheng/TCD/raw/main/assets/styled_lora.png"/>',gl,ll,Wl,el,$l="TCD-LoRA is very versatile, and it can be combined with other adapter types like ControlNets, IP-Adapter, and AnimateDiff.",Il,V,Gl,sl,Cl,il,_l;return p=new ne({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Mixed",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/main/diffusers_doc/en/inference_with_tcd_lora.ipynb"},{label:"PyTorch",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/main/diffusers_doc/en/pytorch/inference_with_tcd_lora.ipynb"},{label:"TensorFlow",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/main/diffusers_doc/en/tensorflow/inference_with_tcd_lora.ipynb"},{label:"Mixed",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/main/diffusers_doc/en/inference_with_tcd_lora.ipynb"},{label:"PyTorch",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/main/diffusers_doc/en/pytorch/inference_with_tcd_lora.ipynb"},{label:"TensorFlow",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/main/diffusers_doc/en/tensorflow/inference_with_tcd_lora.ipynb"}]}}),o=new al({props:{title:"Trajectory Consistency Distillation-LoRA",local:"trajectory-consistency-distillation-lora",headingTag:"h1"}}),g=new Bl({props:{warning:!1,$$slots:{default:[pe]},$$scope:{ctx:I}}}),Q=new R({props:{code:"cGlwJTIwaW5zdGFsbCUyMC1VJTIwcGVmdA==",highlighted:"pip install -U peft",wrap:!1}}),$=new al({props:{title:"General tasks",local:"general-tasks",headingTag:"h2"}}),X=new ql({props:{id:"tasks",options:["text-to-image","inpainting"],$$slots:{default:[me]},$$scope:{ctx:I}}}),H=new al({props:{title:"Community models",local:"community-models",headingTag:"h2"}}),L=new R({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwZGlmZnVzZXJzJTIwaW1wb3J0JTIwU3RhYmxlRGlmZnVzaW9uWExQaXBlbGluZSUyQyUyMFRDRFNjaGVkdWxlciUwQSUwQWRldmljZSUyMCUzRCUyMCUyMmN1ZGElMjIlMEFiYXNlX21vZGVsX2lkJTIwJTNEJTIwJTIyY2FnbGlvc3Ryb2xhYiUyRmFuaW1hZ2luZS14bC0zLjAlMjIlMEF0Y2RfbG9yYV9pZCUyMCUzRCUyMCUyMmgxdCUyRlRDRC1TRFhMLUxvUkElMjIlMEElMEFwaXBlJTIwJTNEJTIwU3RhYmxlRGlmZnVzaW9uWExQaXBlbGluZS5mcm9tX3ByZXRyYWluZWQoYmFzZV9tb2RlbF9pZCUyQyUyMHRvcmNoX2R0eXBlJTNEdG9yY2guZmxvYXQxNiUyQyUyMHZhcmlhbnQlM0QlMjJmcDE2JTIyKS50byhkZXZpY2UpJTBBcGlwZS5zY2hlZHVsZXIlMjAlM0QlMjBUQ0RTY2hlZHVsZXIuZnJvbV9jb25maWcocGlwZS5zY2hlZHVsZXIuY29uZmlnKSUwQSUwQXBpcGUubG9hZF9sb3JhX3dlaWdodHModGNkX2xvcmFfaWQpJTBBcGlwZS5mdXNlX2xvcmEoKSUwQSUwQXByb21wdCUyMCUzRCUyMCUyMkElMjBtYW4lMkMlMjBjbGFkJTIwaW4lMjBhJTIwbWV0aWN1bG91c2x5JTIwdGFpbG9yZWQlMjBtaWxpdGFyeSUyMHVuaWZvcm0lMkMlMjBzdGFuZHMlMjB3aXRoJTIwdW53YXZlcmluZyUyMHJlc29sdmUuJTIwVGhlJTIwdW5pZm9ybSUyMGJvYXN0cyUyMGludHJpY2F0ZSUyMGRldGFpbHMlMkMlMjBhbmQlMjBoaXMlMjBleWVzJTIwZ2xlYW0lMjB3aXRoJTIwZGV0ZXJtaW5hdGlvbi4lMjBTdHJhbmRzJTIwb2YlMjB2aWJyYW50JTJDJTIwd2luZHN3ZXB0JTIwaGFpciUyMHBlZWslMjBvdXQlMjBmcm9tJTIwYmVuZWF0aCUyMHRoZSUyMGJyaW0lMjBvZiUyMGhpcyUyMGNhcC4lMjIlMEElMEFpbWFnZSUyMCUzRCUyMHBpcGUoJTBBJTIwJTIwJTIwJTIwcHJvbXB0JTNEcHJvbXB0JTJDJTBBJTIwJTIwJTIwJTIwbnVtX2luZmVyZW5jZV9zdGVwcyUzRDglMkMlMEElMjAlMjAlMjAlMjBndWlkYW5jZV9zY2FsZSUzRDAlMkMlMEElMjAlMjAlMjAlMjBldGElM0QwLjMlMkMlMEElMjAlMjAlMjAlMjBnZW5lcmF0b3IlM0R0b3JjaC5HZW5lcmF0b3IoZGV2aWNlJTNEZGV2aWNlKS5tYW51YWxfc2VlZCgwKSUyQyUwQSkuaW1hZ2VzJTVCMCU1RA==",highlighted:`<span class="hljs-keyword">import</span> torch
<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> StableDiffusionXLPipeline, TCDScheduler

device = <span class="hljs-string">&quot;cuda&quot;</span>
base_model_id = <span class="hljs-string">&quot;cagliostrolab/animagine-xl-3.0&quot;</span>
tcd_lora_id = <span class="hljs-string">&quot;h1t/TCD-SDXL-LoRA&quot;</span>

pipe = StableDiffusionXLPipeline.from_pretrained(base_model_id, torch_dtype=torch.float16, variant=<span class="hljs-string">&quot;fp16&quot;</span>).to(device)
pipe.scheduler = TCDScheduler.from_config(pipe.scheduler.config)

pipe.load_lora_weights(tcd_lora_id)
pipe.fuse_lora()

prompt = <span class="hljs-string">&quot;A man, clad in a meticulously tailored military uniform, stands with unwavering resolve. The uniform boasts intricate details, and his eyes gleam with determination. Strands of vibrant, windswept hair peek out from beneath the brim of his cap.&quot;</span>

image = pipe(
    prompt=prompt,
    num_inference_steps=<span class="hljs-number">8</span>,
    guidance_scale=<span class="hljs-number">0</span>,
    eta=<span class="hljs-number">0.3</span>,
    generator=torch.Generator(device=device).manual_seed(<span class="hljs-number">0</span>),
).images[<span class="hljs-number">0</span>]`,wrap:!1}}),k=new Bl({props:{warning:!1,$$slots:{default:[ce]},$$scope:{ctx:I}}}),K=new R({props:{code:"aW1wb3J0JTIwdG9yY2glMEFmcm9tJTIwZGlmZnVzZXJzJTIwaW1wb3J0JTIwU3RhYmxlRGlmZnVzaW9uWExQaXBlbGluZSUwQWZyb20lMjBzY2hlZHVsaW5nX3RjZCUyMGltcG9ydCUyMFRDRFNjaGVkdWxlciUwQSUwQWRldmljZSUyMCUzRCUyMCUyMmN1ZGElMjIlMEFiYXNlX21vZGVsX2lkJTIwJTNEJTIwJTIyc3RhYmlsaXR5YWklMkZzdGFibGUtZGlmZnVzaW9uLXhsLWJhc2UtMS4wJTIyJTBBdGNkX2xvcmFfaWQlMjAlM0QlMjAlMjJoMXQlMkZUQ0QtU0RYTC1Mb1JBJTIyJTBBc3R5bGVkX2xvcmFfaWQlMjAlM0QlMjAlMjJUaGVMYXN0QmVuJTJGUGFwZXJjdXRfU0RYTCUyMiUwQSUwQXBpcGUlMjAlM0QlMjBTdGFibGVEaWZmdXNpb25YTFBpcGVsaW5lLmZyb21fcHJldHJhaW5lZChiYXNlX21vZGVsX2lkJTJDJTIwdG9yY2hfZHR5cGUlM0R0b3JjaC5mbG9hdDE2JTJDJTIwdmFyaWFudCUzRCUyMmZwMTYlMjIpLnRvKGRldmljZSklMEFwaXBlLnNjaGVkdWxlciUyMCUzRCUyMFRDRFNjaGVkdWxlci5mcm9tX2NvbmZpZyhwaXBlLnNjaGVkdWxlci5jb25maWcpJTBBJTBBcGlwZS5sb2FkX2xvcmFfd2VpZ2h0cyh0Y2RfbG9yYV9pZCUyQyUyMGFkYXB0ZXJfbmFtZSUzRCUyMnRjZCUyMiklMEFwaXBlLmxvYWRfbG9yYV93ZWlnaHRzKHN0eWxlZF9sb3JhX2lkJTJDJTIwYWRhcHRlcl9uYW1lJTNEJTIyc3R5bGUlMjIpJTBBcGlwZS5zZXRfYWRhcHRlcnMoJTVCJTIydGNkJTIyJTJDJTIwJTIyc3R5bGUlMjIlNUQlMkMlMjBhZGFwdGVyX3dlaWdodHMlM0QlNUIxLjAlMkMlMjAxLjAlNUQpJTBBJTBBcHJvbXB0JTIwJTNEJTIwJTIycGFwZXJjdXQlMjBvZiUyMGElMjB3aW50ZXIlMjBtb3VudGFpbiUyQyUyMHNub3clMjIlMEElMEFpbWFnZSUyMCUzRCUyMHBpcGUoJTBBJTIwJTIwJTIwJTIwcHJvbXB0JTNEcHJvbXB0JTJDJTBBJTIwJTIwJTIwJTIwbnVtX2luZmVyZW5jZV9zdGVwcyUzRDQlMkMlMEElMjAlMjAlMjAlMjBndWlkYW5jZV9zY2FsZSUzRDAlMkMlMEElMjAlMjAlMjAlMjBldGElM0QwLjMlMkMlMEElMjAlMjAlMjAlMjBnZW5lcmF0b3IlM0R0b3JjaC5HZW5lcmF0b3IoZGV2aWNlJTNEZGV2aWNlKS5tYW51YWxfc2VlZCgwKSUyQyUwQSkuaW1hZ2VzJTVCMCU1RA==",highlighted:`<span class="hljs-keyword">import</span> torch
<span class="hljs-keyword">from</span> diffusers <span class="hljs-keyword">import</span> StableDiffusionXLPipeline
<span class="hljs-keyword">from</span> scheduling_tcd <span class="hljs-keyword">import</span> TCDScheduler

device = <span class="hljs-string">&quot;cuda&quot;</span>
base_model_id = <span class="hljs-string">&quot;stabilityai/stable-diffusion-xl-base-1.0&quot;</span>
tcd_lora_id = <span class="hljs-string">&quot;h1t/TCD-SDXL-LoRA&quot;</span>
styled_lora_id = <span class="hljs-string">&quot;TheLastBen/Papercut_SDXL&quot;</span>

pipe = StableDiffusionXLPipeline.from_pretrained(base_model_id, torch_dtype=torch.float16, variant=<span class="hljs-string">&quot;fp16&quot;</span>).to(device)
pipe.scheduler = TCDScheduler.from_config(pipe.scheduler.config)

pipe.load_lora_weights(tcd_lora_id, adapter_name=<span class="hljs-string">&quot;tcd&quot;</span>)
pipe.load_lora_weights(styled_lora_id, adapter_name=<span class="hljs-string">&quot;style&quot;</span>)
pipe.set_adapters([<span class="hljs-string">&quot;tcd&quot;</span>, <span class="hljs-string">&quot;style&quot;</span>], adapter_weights=[<span class="hljs-number">1.0</span>, <span class="hljs-number">1.0</span>])

prompt = <span class="hljs-string">&quot;papercut of a winter mountain, snow&quot;</span>

image = pipe(
    prompt=prompt,
    num_inference_steps=<span class="hljs-number">4</span>,
    guidance_scale=<span class="hljs-number">0</span>,
    eta=<span class="hljs-number">0.3</span>,
    generator=torch.Generator(device=device).manual_seed(<span class="hljs-number">0</span>),
).images[<span class="hljs-number">0</span>]`,wrap:!1}}),ll=new al({props:{title:"Adapters",local:"adapters",headingTag:"h2"}}),V=new ql({props:{id:"adapters",options:["ControlNet","IP-Adapter","AnimateDiff"],$$slots:{default:[he]},$$scope:{ctx:I}}}),sl=new ie({props:{source:"https://github.com/huggingface/diffusers/blob/main/docs/source/en/using-diffusers/inference_with_tcd_lora.md"}}),{c(){e=h("meta"),c=d(),n=h("p"),M=d(),T(p.$$.fragment),i=d(),T(o.$$.fragment),u=d(),r=h("p"),r.textContent=j,_=d(),C=h("p"),C.textContent=nl,B=d(),G=h("ul"),G.innerHTML=E,m=d(),T(g.$$.fragment),F=d(),Y=h("p"),Y.innerHTML=Rl,ol=d(),N=h("p"),N.textContent=Xl,rl=d(),S=h("table"),S.innerHTML=kl,ml=d(),v=h("p"),v.innerHTML=Vl,cl=d(),T(Q.$$.fragment),Ml=d(),T($.$$.fragment),dl=d(),D=h("p"),D.innerHTML=El,Jl=d(),z=h("p"),z.textContent=Fl,ul=d(),A=h("ul"),A.innerHTML=Yl,hl=d(),T(X.$$.fragment),yl=d(),T(H.$$.fragment),Tl=d(),x=h("p"),x.innerHTML=Nl,wl=d(),T(L.$$.fragment),bl=d(),q=h("p"),q.innerHTML=Sl,fl=d(),P=h("p"),P.innerHTML=vl,Ul=d(),T(k.$$.fragment),Zl=d(),T(K.$$.fragment),jl=d(),O=h("p"),O.innerHTML=Ql,gl=d(),T(ll.$$.fragment),Wl=d(),el=h("p"),el.textContent=$l,Il=d(),T(V.$$.fragment),Gl=d(),T(sl.$$.fragment),Cl=d(),il=h("p"),this.h()},l(l){const t=ee("svelte-u9bgzb",document.head);e=y(t,"META",{name:!0,content:!0}),t.forEach(s),c=J(l),n=y(l,"P",{}),xl(n).forEach(s),M=J(l),w(p.$$.fragment,l),i=J(l),w(o.$$.fragment,l),u=J(l),r=y(l,"P",{"data-svelte-h":!0}),W(r)!=="svelte-1ipiy2w"&&(r.textContent=j),_=J(l),C=y(l,"P",{"data-svelte-h":!0}),W(C)!=="svelte-lghdda"&&(C.textContent=nl),B=J(l),G=y(l,"UL",{"data-svelte-h":!0}),W(G)!=="svelte-s8ifhe"&&(G.innerHTML=E),m=J(l),w(g.$$.fragment,l),F=J(l),Y=y(l,"P",{"data-svelte-h":!0}),W(Y)!=="svelte-ss6l19"&&(Y.innerHTML=Rl),ol=J(l),N=y(l,"P",{"data-svelte-h":!0}),W(N)!=="svelte-4sxfqt"&&(N.textContent=Xl),rl=J(l),S=y(l,"TABLE",{"data-svelte-h":!0}),W(S)!=="svelte-143krth"&&(S.innerHTML=kl),ml=J(l),v=y(l,"P",{"data-svelte-h":!0}),W(v)!=="svelte-18m9u5y"&&(v.innerHTML=Vl),cl=J(l),w(Q.$$.fragment,l),Ml=J(l),w($.$$.fragment,l),dl=J(l),D=y(l,"P",{"data-svelte-h":!0}),W(D)!=="svelte-1ls7ryh"&&(D.innerHTML=El),Jl=J(l),z=y(l,"P",{"data-svelte-h":!0}),W(z)!=="svelte-49ynuh"&&(z.textContent=Fl),ul=J(l),A=y(l,"UL",{"data-svelte-h":!0}),W(A)!=="svelte-ner4uo"&&(A.innerHTML=Yl),hl=J(l),w(X.$$.fragment,l),yl=J(l),w(H.$$.fragment,l),Tl=J(l),x=y(l,"P",{"data-svelte-h":!0}),W(x)!=="svelte-188pw20"&&(x.innerHTML=Nl),wl=J(l),w(L.$$.fragment,l),bl=J(l),q=y(l,"P",{"data-svelte-h":!0}),W(q)!=="svelte-iffd98"&&(q.innerHTML=Sl),fl=J(l),P=y(l,"P",{"data-svelte-h":!0}),W(P)!=="svelte-1bzy2jr"&&(P.innerHTML=vl),Ul=J(l),w(k.$$.fragment,l),Zl=J(l),w(K.$$.fragment,l),jl=J(l),O=y(l,"P",{"data-svelte-h":!0}),W(O)!=="svelte-64b3tk"&&(O.innerHTML=Ql),gl=J(l),w(ll.$$.fragment,l),Wl=J(l),el=y(l,"P",{"data-svelte-h":!0}),W(el)!=="svelte-jvx8ap"&&(el.textContent=$l),Il=J(l),w(V.$$.fragment,l),Gl=J(l),w(sl.$$.fragment,l),Cl=J(l),il=y(l,"P",{}),xl(il).forEach(s),this.h()},h(){Ll(e,"name","hf:doc:metadata"),Ll(e,"content",Te)},m(l,t){se(document.head,e),a(l,c,t),a(l,n,t),a(l,M,t),b(p,l,t),a(l,i,t),b(o,l,t),a(l,u,t),a(l,r,t),a(l,_,t),a(l,C,t),a(l,B,t),a(l,G,t),a(l,m,t),b(g,l,t),a(l,F,t),a(l,Y,t),a(l,ol,t),a(l,N,t),a(l,rl,t),a(l,S,t),a(l,ml,t),a(l,v,t),a(l,cl,t),b(Q,l,t),a(l,Ml,t),b($,l,t),a(l,dl,t),a(l,D,t),a(l,Jl,t),a(l,z,t),a(l,ul,t),a(l,A,t),a(l,hl,t),b(X,l,t),a(l,yl,t),b(H,l,t),a(l,Tl,t),a(l,x,t),a(l,wl,t),b(L,l,t),a(l,bl,t),a(l,q,t),a(l,fl,t),a(l,P,t),a(l,Ul,t),b(k,l,t),a(l,Zl,t),b(K,l,t),a(l,jl,t),a(l,O,t),a(l,gl,t),b(ll,l,t),a(l,Wl,t),a(l,el,t),a(l,Il,t),b(V,l,t),a(l,Gl,t),b(sl,l,t),a(l,Cl,t),a(l,il,t),_l=!0},p(l,[t]){const Dl={};t&2&&(Dl.$$scope={dirty:t,ctx:l}),g.$set(Dl);const zl={};t&2&&(zl.$$scope={dirty:t,ctx:l}),X.$set(zl);const Al={};t&2&&(Al.$$scope={dirty:t,ctx:l}),k.$set(Al);const Hl={};t&2&&(Hl.$$scope={dirty:t,ctx:l}),V.$set(Hl)},i(l){_l||(f(p.$$.fragment,l),f(o.$$.fragment,l),f(g.$$.fragment,l),f(Q.$$.fragment,l),f($.$$.fragment,l),f(X.$$.fragment,l),f(H.$$.fragment,l),f(L.$$.fragment,l),f(k.$$.fragment,l),f(K.$$.fragment,l),f(ll.$$.fragment,l),f(V.$$.fragment,l),f(sl.$$.fragment,l),_l=!0)},o(l){U(p.$$.fragment,l),U(o.$$.fragment,l),U(g.$$.fragment,l),U(Q.$$.fragment,l),U($.$$.fragment,l),U(X.$$.fragment,l),U(H.$$.fragment,l),U(L.$$.fragment,l),U(k.$$.fragment,l),U(K.$$.fragment,l),U(ll.$$.fragment,l),U(V.$$.fragment,l),U(sl.$$.fragment,l),_l=!1},d(l){l&&(s(c),s(n),s(M),s(i),s(u),s(r),s(_),s(C),s(B),s(G),s(m),s(F),s(Y),s(ol),s(N),s(rl),s(S),s(ml),s(v),s(cl),s(Ml),s(dl),s(D),s(Jl),s(z),s(ul),s(A),s(hl),s(yl),s(Tl),s(x),s(wl),s(bl),s(q),s(fl),s(P),s(Ul),s(Zl),s(jl),s(O),s(gl),s(Wl),s(el),s(Il),s(Gl),s(Cl),s(il)),s(e),Z(p,l),Z(o,l),Z(g,l),Z(Q,l),Z($,l),Z(X,l),Z(H,l),Z(L,l),Z(k,l),Z(K,l),Z(ll,l),Z(V,l),Z(sl,l)}}}const Te='{"title":"Trajectory Consistency Distillation-LoRA","local":"trajectory-consistency-distillation-lora","sections":[{"title":"General tasks","local":"general-tasks","sections":[],"depth":2},{"title":"Community models","local":"community-models","sections":[],"depth":2},{"title":"Adapters","local":"adapters","sections":[{"title":"Depth ControlNet","local":"depth-controlnet","sections":[],"depth":3},{"title":"Canny ControlNet","local":"canny-controlnet","sections":[],"depth":3}],"depth":2}],"depth":1}';function we(I){return Kl(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ie extends Ol{constructor(e){super(),le(this,e,we,ye,Pl,{})}}export{Ie as component};
