import{s as Cf,o as Mf,n as Df}from"../chunks/scheduler.bdbef820.js";import{S as If,i as kf,g as o,s as a,r as l,A as Lf,h as r,f as s,c as n,j as b,u as c,x as d,k as g,y as e,a as M,v as i,d as p,t as m,w as u}from"../chunks/index.c0aea24a.js";import{D as f}from"../chunks/Docstring.a4266085.js";import{C as Pf}from"../chunks/CodeBlock.e814ab8d.js";import{E as Ef}from"../chunks/ExampleCodeBlock.8633afcb.js";import{H as td,E as jf}from"../chunks/index.89e522f3.js";function Vf(nd){let I,Et="Examples:",j,L,P;return L=new Pf({props:{code:"aW1wb3J0JTIwcGFuZGFzJTIwYXMlMjBwZCUwQWltcG9ydCUyMHB5YXJyb3clMjBhcyUyMHBhJTBBZGYlMjAlM0QlMjBwZC5EYXRhRnJhbWUoJTdCJTBBcGEuVGFibGUuZnJvbV9wYW5kYXMoZGYp",highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pyarrow <span class="hljs-keyword">as</span> pa
<span class="hljs-meta">&gt;&gt;&gt; </span>df = pd.DataFrame({
    ...     <span class="hljs-string">&#x27;int&#x27;</span>: [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>],
    ...     <span class="hljs-string">&#x27;str&#x27;</span>: [<span class="hljs-string">&#x27;a&#x27;</span>, <span class="hljs-string">&#x27;b&#x27;</span>]
    ... })
<span class="hljs-meta">&gt;&gt;&gt; </span>pa.Table.from_pandas(df)
&lt;pyarrow.lib.Table <span class="hljs-built_in">object</span> at <span class="hljs-number">0x7f05d1fb1b40</span>&gt;`,wrap:!1}}),{c(){I=o("p"),I.textContent=Et,j=a(),l(L.$$.fragment)},l(D){I=r(D,"P",{"data-svelte-h":!0}),d(I)!=="svelte-kvfsh7"&&(I.textContent=Et),j=n(D),c(L.$$.fragment,D)},m(D,E){M(D,I,E),M(D,j,E),i(L,D,E),P=!0},p:Df,i(D){P||(p(L.$$.fragment,D),P=!0)},o(D){m(L.$$.fragment,D),P=!1},d(D){D&&(s(I),s(j)),u(L,D)}}}function Ff(nd){let I,Et,j,L,P,D,E,Fu=`Each <code>Dataset</code> object is backed by a PyArrow Table.
A Table can be loaded from either the disk (memory mapped) or in memory.
Several Table types are available, and they all inherit from <a href="/docs/datasets/v3.6.0/en/package_reference/table_classes#datasets.table.Table">table.Table</a>.`,od,jt,rd,T,Vt,Kl,Jn,Au=`Wraps a pyarrow Table by using composition.
This is the base class for <code>InMemoryTable</code>, <code>MemoryMappedTable</code> and <code>ConcatenationTable</code>.`,Zl,Yn,Nu=`It implements all the basic attributes/methods of the pyarrow Table class except
the Table transforms: <code>slice, filter, flatten, combine_chunks, cast, add_column, append_column, remove_column, set_column, rename_columns</code> and <code>drop</code>.`,Ql,Kn,qu="The implementation of these methods differs for the subclasses.",ec,V,Ft,tc,Zn,Hu="Perform validation checks.  An exception is raised if validation fails.",ac,Qn,Su=`By default only cheap validation checks are run.  Pass <code>full=True</code>
for thorough validation checks (potentially <code>O(n)</code>).`,nc,ee,At,oc,eo,zu="Check if contents of two tables are equal.",rc,te,Nt,sc,to,Uu="Convert Table to list of (contiguous) <code>RecordBatch</code> objects.",dc,ae,qt,lc,ao,Ru="Convert the Table to a <code>dict</code> or <code>OrderedDict</code>.",cc,ne,Ht,ic,no,Bu="Convert to a pandas-compatible NumPy array or DataFrame, as appropriate.",pc,oo,St,mc,oe,zt,uc,ro,Ou="Select a schema field by its column name or numeric index.",bc,re,Ut,gc,so,Wu="Select a column by its column name, or numeric index.",fc,se,Rt,hc,lo,Xu="Iterator over all columns in their numerical order.",vc,de,Bt,xc,co,Gu="Schema of the table and its columns.",yc,le,Ot,$c,io,Ju="List of all columns in numerical order.",_c,ce,Wt,Tc,po,Yu="Number of columns in this table.",wc,F,Xt,Cc,mo,Ku="Number of rows in this table.",Mc,uo,Zu=`Due to the definition of a table, all columns have the same number of
rows.`,Dc,ie,Gt,Ic,bo,Qu="Dimensions of the table: (#rows, #columns).",kc,pe,Jt,Lc,go,eb="Total number of bytes consumed by the elements of the table.",sd,Yt,dd,h,Kt,Pc,fo,tb="The table is said in-memory when it is loaded into the user’s RAM.",Ec,ho,ab=`Pickling it does copy all the data using memory.
Its implementation is simple and uses the underlying pyarrow Table methods directly.`,jc,vo,nb=`This is different from the <code>MemoryMapped</code> table, for which pickling doesn’t copy all the
data in memory. For a <code>MemoryMapped</code>, unpickling instead reloads the table from the disk.`,Vc,xo,ob=`<code>InMemoryTable</code> must be used when data fit in memory, while <code>MemoryMapped</code> are reserved for
data bigger than memory or when you want the memory footprint of your application to
stay low.`,Fc,A,Zt,Ac,yo,rb="Perform validation checks.  An exception is raised if validation fails.",Nc,$o,sb=`By default only cheap validation checks are run.  Pass <code>full=True</code>
for thorough validation checks (potentially <code>O(n)</code>).`,qc,me,Qt,Hc,_o,db="Check if contents of two tables are equal.",Sc,ue,ea,zc,To,lb="Convert Table to list of (contiguous) <code>RecordBatch</code> objects.",Uc,be,ta,Rc,wo,cb="Convert the Table to a <code>dict</code> or <code>OrderedDict</code>.",Bc,ge,aa,Oc,Co,ib="Convert to a pandas-compatible NumPy array or DataFrame, as appropriate.",Wc,Mo,na,Xc,fe,oa,Gc,Do,pb="Select a schema field by its column name or numeric index.",Jc,he,ra,Yc,Io,mb="Select a column by its column name, or numeric index.",Kc,ve,sa,Zc,ko,ub="Iterator over all columns in their numerical order.",Qc,xe,da,ei,Lo,bb="Schema of the table and its columns.",ti,ye,la,ai,Po,gb="List of all columns in numerical order.",ni,$e,ca,oi,Eo,fb="Number of columns in this table.",ri,N,ia,si,jo,hb="Number of rows in this table.",di,Vo,vb=`Due to the definition of a table, all columns have the same number of
rows.`,li,_e,pa,ci,Fo,xb="Dimensions of the table: (#rows, #columns).",ii,Te,ma,pi,Ao,yb="Total number of bytes consumed by the elements of the table.",mi,we,ua,ui,No,$b="Names of the table’s columns.",bi,Ce,ba,gi,qo,_b="Compute zero-copy slice of this Table.",fi,Me,ga,hi,Ho,Tb="Select records from a Table. See <code>pyarrow.compute.filter</code> for full usage.",vi,De,fa,xi,So,wb=`Flatten this Table.  Each column with a struct type is flattened
into one column per struct field.  Other columns are left unchanged.`,yi,q,ha,$i,zo,Cb="Make a new table by combining the chunks this table has.",_i,Uo,Mb=`All the underlying chunks in the <code>ChunkedArray</code> of each column are
concatenated into zero or one chunk.`,Ti,Ie,va,wi,Ro,Db="Cast table values to another schema.",Ci,ke,xa,Mi,Bo,Ib=`EXPERIMENTAL: Create shallow copy of table by replacing schema
key-value metadata with the indicated new metadata (which may be <code>None</code>,
which deletes any existing metadata).`,Di,H,ya,Ii,Oo,kb="Add column to Table at position.",ki,Wo,Lb=`A new table is returned with the column added, the original table
object is left unchanged.`,Li,Le,$a,Pi,Xo,Pb="Append column at end of columns.",Ei,Pe,_a,ji,Go,Eb="Create new Table with the indicated column removed.",Vi,Ee,Ta,Fi,Jo,jb="Replace column in Table at position.",Ai,je,wa,Ni,Yo,Vb="Create new table with columns renamed to provided names.",qi,S,Ca,Hi,Ko,Fb="Select columns of the table.",Si,Zo,Ab="Returns a new table with the specified columns, and metadata preserved.",zi,Ve,Ma,Ui,Qo,Nb="Drop one or more columns and return a new table.",Ri,er,Da,Bi,tr,Ia,Oi,k,ka,Wi,ar,qb="Convert pandas.DataFrame to an Arrow Table.",Xi,nr,Hb=`The column types in the resulting Arrow Table are inferred from the
dtypes of the pandas.Series in the DataFrame. In the case of non-object
Series, the NumPy dtype is translated to its Arrow equivalent. In the
case of <code>object</code>, we need to guess the datatype by looking at the
Python objects in this Series.`,Gi,or,Sb=`Be aware that Series of the <code>object</code> dtype don’t carry enough
information to always lead to a meaningful Arrow type. In the case that
we cannot infer a type, e.g. because the DataFrame is of length 0 or
the Series only contains <code>None/nan</code> objects, the type is set to
null. This behavior can be avoided by constructing an explicit schema
and passing it to this function.`,Ji,Fe,Yi,Ae,La,Ki,rr,zb="Construct a Table from Arrow arrays.",Zi,Ne,Pa,Qi,sr,Ub="Construct a Table from Arrow arrays or columns.",ep,qe,Ea,tp,dr,Rb="Construct a Table from a sequence or iterator of Arrow <code>RecordBatches</code>.",ld,ja,cd,y,Va,ap,lr,Bb=`The table is said memory mapped when it doesn’t use the user’s RAM but loads the data
from the disk instead.`,np,cr,Ob=`Pickling it doesn’t copy the data into memory.
Instead, only the path to the memory mapped arrow file is pickled, as well as the list
of transforms to “replay” when reloading the table from the disk.`,op,ir,Wb=`Its implementation requires to store an history of all the transforms that were applied
to the underlying pyarrow Table, so that they can be “replayed” when reloading the Table
from the disk.`,rp,pr,Xb=`This is different from the <code>InMemoryTable</code> table, for which pickling does copy all the
data in memory.`,sp,mr,Gb=`<code>InMemoryTable</code> must be used when data fit in memory, while <code>MemoryMapped</code> are reserved for
data bigger than memory or when you want the memory footprint of your application to
stay low.`,dp,z,Fa,lp,ur,Jb="Perform validation checks.  An exception is raised if validation fails.",cp,br,Yb=`By default only cheap validation checks are run.  Pass <code>full=True</code>
for thorough validation checks (potentially <code>O(n)</code>).`,ip,He,Aa,pp,gr,Kb="Check if contents of two tables are equal.",mp,Se,Na,up,fr,Zb="Convert Table to list of (contiguous) <code>RecordBatch</code> objects.",bp,ze,qa,gp,hr,Qb="Convert the Table to a <code>dict</code> or <code>OrderedDict</code>.",fp,Ue,Ha,hp,vr,eg="Convert to a pandas-compatible NumPy array or DataFrame, as appropriate.",vp,xr,Sa,xp,Re,za,yp,yr,tg="Select a schema field by its column name or numeric index.",$p,Be,Ua,_p,$r,ag="Select a column by its column name, or numeric index.",Tp,Oe,Ra,wp,_r,ng="Iterator over all columns in their numerical order.",Cp,We,Ba,Mp,Tr,og="Schema of the table and its columns.",Dp,Xe,Oa,Ip,wr,rg="List of all columns in numerical order.",kp,Ge,Wa,Lp,Cr,sg="Number of columns in this table.",Pp,U,Xa,Ep,Mr,dg="Number of rows in this table.",jp,Dr,lg=`Due to the definition of a table, all columns have the same number of
rows.`,Vp,Je,Ga,Fp,Ir,cg="Dimensions of the table: (#rows, #columns).",Ap,Ye,Ja,Np,kr,ig="Total number of bytes consumed by the elements of the table.",qp,Ke,Ya,Hp,Lr,pg="Names of the table’s columns.",Sp,Ze,Ka,zp,Pr,mg="Compute zero-copy slice of this Table.",Up,Qe,Za,Rp,Er,ug="Select records from a Table. See <code>pyarrow.compute.filter</code> for full usage.",Bp,et,Qa,Op,jr,bg=`Flatten this Table.  Each column with a struct type is flattened
into one column per struct field.  Other columns are left unchanged.`,Wp,R,en,Xp,Vr,gg="Make a new table by combining the chunks this table has.",Gp,Fr,fg=`All the underlying chunks in the ChunkedArray of each column are
concatenated into zero or one chunk.`,Jp,tt,tn,Yp,Ar,hg="Cast table values to another schema",Kp,at,an,Zp,Nr,vg=`EXPERIMENTAL: Create shallow copy of table by replacing schema
key-value metadata with the indicated new metadata (which may be None,
which deletes any existing metadata.`,Qp,B,nn,em,qr,xg="Add column to Table at position.",tm,Hr,yg=`A new table is returned with the column added, the original table
object is left unchanged.`,am,nt,on,nm,Sr,$g="Append column at end of columns.",om,ot,rn,rm,zr,_g="Create new Table with the indicated column removed.",sm,rt,sn,dm,Ur,Tg="Replace column in Table at position.",lm,st,dn,cm,Rr,wg="Create new table with columns renamed to provided names.",im,O,ln,pm,Br,Cg="Select columns of the table.",mm,Or,Mg="Returns a new table with the specified columns, and metadata preserved.",um,dt,cn,bm,Wr,Dg="Drop one or more columns and return a new table.",gm,Xr,pn,id,mn,pd,v,un,fm,Gr,Ig=`The table comes from the concatenation of several tables called blocks.
It enables concatenation on both axis 0 (append rows) and axis 1 (append columns).`,hm,Jr,kg=`The underlying tables are called “blocks” and can be either <code>InMemoryTable</code>
or <code>MemoryMappedTable</code> objects.
This allows to combine tables that come from memory or that are memory mapped.
When a <code>ConcatenationTable</code> is pickled, then each block is pickled:`,vm,Yr,Lg=`<li>the <code>InMemoryTable</code> objects are pickled by copying all the data in memory.</li> <li>the MemoryMappedTable objects are pickled without copying the data into memory.
Instead, only the path to the memory mapped arrow file is pickled, as well as the list
of transforms to “replays” when reloading the table from the disk.</li>`,xm,Kr,Pg=`Its implementation requires to store each block separately.
The <code>blocks</code> attributes stores a list of list of blocks.
The first axis concatenates the tables along the axis 0 (it appends rows),
while the second axis concatenates tables along the axis 1 (it appends columns).`,ym,Zr,Eg=`If some columns are missing when concatenating on axis 0, they are filled with null values.
This is done using <code>pyarrow.concat_tables(tables, promote=True)</code>.`,$m,Qr,jg=`You can access the fully combined table by accessing the <code>ConcatenationTable.table</code> attribute,
and the blocks by accessing the <code>ConcatenationTable.blocks</code> attribute.`,_m,W,bn,Tm,es,Vg="Perform validation checks.  An exception is raised if validation fails.",wm,ts,Fg=`By default only cheap validation checks are run.  Pass <code>full=True</code>
for thorough validation checks (potentially <code>O(n)</code>).`,Cm,lt,gn,Mm,as,Ag="Check if contents of two tables are equal.",Dm,ct,fn,Im,ns,Ng="Convert Table to list of (contiguous) <code>RecordBatch</code> objects.",km,it,hn,Lm,os,qg="Convert the Table to a <code>dict</code> or <code>OrderedDict</code>.",Pm,pt,vn,Em,rs,Hg="Convert to a pandas-compatible NumPy array or DataFrame, as appropriate.",jm,ss,xn,Vm,mt,yn,Fm,ds,Sg="Select a schema field by its column name or numeric index.",Am,ut,$n,Nm,ls,zg="Select a column by its column name, or numeric index.",qm,bt,_n,Hm,cs,Ug="Iterator over all columns in their numerical order.",Sm,gt,Tn,zm,is,Rg="Schema of the table and its columns.",Um,ft,wn,Rm,ps,Bg="List of all columns in numerical order.",Bm,ht,Cn,Om,ms,Og="Number of columns in this table.",Wm,X,Mn,Xm,us,Wg="Number of rows in this table.",Gm,bs,Xg=`Due to the definition of a table, all columns have the same number of
rows.`,Jm,vt,Dn,Ym,gs,Gg="Dimensions of the table: (#rows, #columns).",Km,xt,In,Zm,fs,Jg="Total number of bytes consumed by the elements of the table.",Qm,yt,kn,eu,hs,Yg="Names of the table’s columns.",tu,$t,Ln,au,vs,Kg="Compute zero-copy slice of this Table.",nu,_t,Pn,ou,xs,Zg="Select records from a Table. See <code>pyarrow.compute.filter</code> for full usage.",ru,Tt,En,su,ys,Qg=`Flatten this Table.  Each column with a struct type is flattened
into one column per struct field.  Other columns are left unchanged.`,du,G,jn,lu,$s,ef="Make a new table by combining the chunks this table has.",cu,_s,tf=`All the underlying chunks in the <code>ChunkedArray</code> of each column are
concatenated into zero or one chunk.`,iu,wt,Vn,pu,Ts,af="Cast table values to another schema.",mu,Ct,Fn,uu,ws,nf=`EXPERIMENTAL: Create shallow copy of table by replacing schema
key-value metadata with the indicated new metadata (which may be <code>None</code>,
which deletes any existing metadata).`,bu,J,An,gu,Cs,of="Add column to Table at position.",fu,Ms,rf=`A new table is returned with the column added, the original table
object is left unchanged.`,hu,Mt,Nn,vu,Ds,sf="Append column at end of columns.",xu,Dt,qn,yu,Is,df="Create new Table with the indicated column removed.",$u,It,Hn,_u,ks,lf="Replace column in Table at position.",Tu,kt,Sn,wu,Ls,cf="Create new table with columns renamed to provided names.",Cu,Y,zn,Mu,Ps,pf="Select columns of the table.",Du,Es,mf="Returns a new table with the specified columns, and metadata preserved.",Iu,Lt,Un,ku,js,uf="Drop one or more columns and return a new table.",Lu,Vs,Rn,Pu,Pt,Bn,Eu,Fs,bf="Create <code>ConcatenationTable</code> from list of tables.",md,On,ud,Z,Wn,ju,As,gf="Concatenate tables.",bd,Q,Xn,Vu,Ns,ff=`Get the cache files that are loaded by the table.
Cache file are used when parts of the table come from the disk via memory mapping.`,gd,Gn,fd,ad,hd;return P=new td({props:{title:"Table Classes",local:"table-classes",headingTag:"h1"}}),jt=new td({props:{title:"Table",local:"datasets.table.Table",headingTag:"h2"}}),Vt=new f({props:{name:"class datasets.table.Table",anchor:"datasets.table.Table",parameters:[{name:"table",val:": Table"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L154"}}),Ft=new f({props:{name:"validate",anchor:"datasets.table.Table.validate",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"datasets.table.Table.validate.full",description:`<strong>full</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
If <code>True</code>, run expensive checks, otherwise cheap checks only.`,name:"full"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L179",raiseDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<ul>
<li><code>pa.lib.ArrowInvalid</code> — if validation fails</li>
</ul>
`,raiseType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>pa.lib.ArrowInvalid</code></p>
`}}),At=new f({props:{name:"equals",anchor:"datasets.table.Table.equals",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"datasets.table.Table.equals.other",description:`<strong>other</strong> (<a href="/docs/datasets/v3.6.0/en/package_reference/table_classes#datasets.table.Table">Table</a>) &#x2014;
Table to compare against.`,name:"other"},{anchor:"datasets.table.Table.equals.check_metadata",description:`<strong>check_metadata</strong> <code>bool</code>, defaults to <code>False</code>) &#x2014;
Whether schema metadata equality should be checked as well.`,name:"check_metadata"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L195",returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>bool</code></p>
`}}),Nt=new f({props:{name:"to_batches",anchor:"datasets.table.Table.to_batches",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"datasets.table.Table.to_batches.max_chunksize",description:`<strong>max_chunksize</strong> (<code>int</code>, defaults to <code>None</code>) &#x2014;
Maximum size for <code>RecordBatch</code> chunks. Individual chunks may be
smaller depending on the chunk layout of individual columns.`,name:"max_chunksize"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L212",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[pyarrow.RecordBatch]</code></p>
`}}),qt=new f({props:{name:"to_pydict",anchor:"datasets.table.Table.to_pydict",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L226",returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>dict</code></p>
`}}),Ht=new f({props:{name:"to_pandas",anchor:"datasets.table.Table.to_pandas",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"datasets.table.Table.to_pandas.memory_pool",description:`<strong>memory_pool</strong> (<code>MemoryPool</code>, defaults to <code>None</code>) &#x2014;
Arrow MemoryPool to use for allocations. Uses the default memory
pool is not passed.`,name:"memory_pool"},{anchor:"datasets.table.Table.to_pandas.strings_to_categorical",description:`<strong>strings_to_categorical</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Encode string (UTF8) and binary types to <code>pandas.Categorical</code>.`,name:"strings_to_categorical"},{anchor:"datasets.table.Table.to_pandas.categories",description:`<strong>categories</strong> (<code>list</code>, defaults to <code>empty</code>) &#x2014;
List of fields that should be returned as <code>pandas.Categorical</code>. Only
applies to table-like data structures.`,name:"categories"},{anchor:"datasets.table.Table.to_pandas.zero_copy_only",description:`<strong>zero_copy_only</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Raise an <code>ArrowException</code> if this function call would require copying
the underlying data.`,name:"zero_copy_only"},{anchor:"datasets.table.Table.to_pandas.integer_object_nulls",description:`<strong>integer_object_nulls</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Cast integers with nulls to objects.`,name:"integer_object_nulls"},{anchor:"datasets.table.Table.to_pandas.date_as_object",description:`<strong>date_as_object</strong> (<code>bool</code>, defaults to <code>True</code>) &#x2014;
Cast dates to objects. If <code>False</code>, convert to <code>datetime64[ns]</code> dtype.`,name:"date_as_object"},{anchor:"datasets.table.Table.to_pandas.timestamp_as_object",description:`<strong>timestamp_as_object</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Cast non-nanosecond timestamps (<code>np.datetime64</code>) to objects. This is
useful if you have timestamps that don&#x2019;t fit in the normal date
range of nanosecond timestamps (1678 CE-2262 CE).
If <code>False</code>, all timestamps are converted to <code>datetime64[ns]</code> dtype.`,name:"timestamp_as_object"},{anchor:"datasets.table.Table.to_pandas.use_threads",description:`<strong>use_threads</strong> (<code>bool</code>, defaults to <code>True</code>) &#x2014;
Whether to parallelize the conversion using multiple threads.`,name:"use_threads"},{anchor:"datasets.table.Table.to_pandas.deduplicate_objects",description:`<strong>deduplicate_objects</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Do not create multiple copies Python objects when created, to save
on memory use. Conversion will be slower.`,name:"deduplicate_objects"},{anchor:"datasets.table.Table.to_pandas.ignore_metadata",description:`<strong>ignore_metadata</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
If <code>True</code>, do not use the &#x2018;pandas&#x2019; metadata to reconstruct the
DataFrame index, if present.`,name:"ignore_metadata"},{anchor:"datasets.table.Table.to_pandas.safe",description:`<strong>safe</strong> (<code>bool</code>, defaults to <code>True</code>) &#x2014;
For certain data types, a cast is needed in order to store the
data in a pandas DataFrame or Series (e.g. timestamps are always
stored as nanoseconds in pandas). This option controls whether it
is a safe cast or not.`,name:"safe"},{anchor:"datasets.table.Table.to_pandas.split_blocks",description:`<strong>split_blocks</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
If <code>True</code>, generate one internal &#x201C;block&#x201D; for each column when
creating a pandas.DataFrame from a <code>RecordBatch</code> or <code>Table</code>. While this
can temporarily reduce memory note that various pandas operations
can trigger &#x201C;consolidation&#x201D; which may balloon memory use.`,name:"split_blocks"},{anchor:"datasets.table.Table.to_pandas.self_destruct",description:`<strong>self_destruct</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
EXPERIMENTAL: If <code>True</code>, attempt to deallocate the originating Arrow
memory while converting the Arrow object to pandas. If you use the
object after calling <code>to_pandas</code> with this option it will crash your
program.`,name:"self_destruct"},{anchor:"datasets.table.Table.to_pandas.types_mapper",description:`<strong>types_mapper</strong> (<code>function</code>, defaults to <code>None</code>) &#x2014;
A function mapping a pyarrow DataType to a pandas <code>ExtensionDtype</code>.
This can be used to override the default pandas type for conversion
of built-in pyarrow types or in absence of <code>pandas_metadata</code> in the
Table schema. The function receives a pyarrow DataType and is
expected to return a pandas <code>ExtensionDtype</code> or <code>None</code> if the
default conversion should be used for that type. If you have
a dictionary mapping, you can pass <code>dict.get</code> as function.`,name:"types_mapper"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L244",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>pandas.Series</code> or <code>pandas.DataFrame</code> depending on type of object</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>pandas.Series</code> or <code>pandas.DataFrame</code></p>
`}}),St=new f({props:{name:"to_string",anchor:"datasets.table.Table.to_string",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L306"}}),zt=new f({props:{name:"field",anchor:"datasets.table.Table.field",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"datasets.table.Table.field.i",description:`<strong>i</strong> (<code>Union[int, str]</code>) &#x2014;
The index or name of the field to retrieve.`,name:"i"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L325",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>pyarrow.Field</code></p>
`}}),Ut=new f({props:{name:"column",anchor:"datasets.table.Table.column",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"datasets.table.Table.column.i",description:`<strong>i</strong> (<code>Union[int, str]</code>) &#x2014;
The index or name of the column to retrieve.`,name:"i"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L338",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>pyarrow.ChunkedArray</code></p>
`}}),Rt=new f({props:{name:"itercolumns",anchor:"datasets.table.Table.itercolumns",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L351"}}),Bt=new f({props:{name:"schema",anchor:"datasets.table.Table.schema",parameters:[],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L360",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>pyarrow.Schema</code></p>
`}}),Ot=new f({props:{name:"columns",anchor:"datasets.table.Table.columns",parameters:[],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L370",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[pa.ChunkedArray]</code></p>
`}}),Wt=new f({props:{name:"num_columns",anchor:"datasets.table.Table.num_columns",parameters:[],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L380",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>int</p>
`}}),Xt=new f({props:{name:"num_rows",anchor:"datasets.table.Table.num_rows",parameters:[],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L390",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>int</p>
`}}),Gt=new f({props:{name:"shape",anchor:"datasets.table.Table.shape",parameters:[],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L403",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>Number of rows and number of columns.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>(int, int)</code></p>
`}}),Jt=new f({props:{name:"nbytes",anchor:"datasets.table.Table.nbytes",parameters:[],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L413"}}),Yt=new td({props:{title:"InMemoryTable",local:"datasets.table.InMemoryTable",headingTag:"h2"}}),Kt=new f({props:{name:"class datasets.table.InMemoryTable",anchor:"datasets.table.InMemoryTable",parameters:[{name:"table",val:": Table"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L639"}}),Zt=new f({props:{name:"validate",anchor:"datasets.table.InMemoryTable.validate",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"datasets.table.InMemoryTable.validate.full",description:`<strong>full</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
If <code>True</code>, run expensive checks, otherwise cheap checks only.`,name:"full"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L179",raiseDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<ul>
<li><code>pa.lib.ArrowInvalid</code> — if validation fails</li>
</ul>
`,raiseType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>pa.lib.ArrowInvalid</code></p>
`}}),Qt=new f({props:{name:"equals",anchor:"datasets.table.InMemoryTable.equals",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"datasets.table.InMemoryTable.equals.other",description:`<strong>other</strong> (<a href="/docs/datasets/v3.6.0/en/package_reference/table_classes#datasets.table.Table">Table</a>) &#x2014;
Table to compare against.`,name:"other"},{anchor:"datasets.table.InMemoryTable.equals.check_metadata",description:`<strong>check_metadata</strong> <code>bool</code>, defaults to <code>False</code>) &#x2014;
Whether schema metadata equality should be checked as well.`,name:"check_metadata"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L195",returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>bool</code></p>
`}}),ea=new f({props:{name:"to_batches",anchor:"datasets.table.InMemoryTable.to_batches",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"datasets.table.InMemoryTable.to_batches.max_chunksize",description:`<strong>max_chunksize</strong> (<code>int</code>, defaults to <code>None</code>) &#x2014;
Maximum size for <code>RecordBatch</code> chunks. Individual chunks may be
smaller depending on the chunk layout of individual columns.`,name:"max_chunksize"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L212",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[pyarrow.RecordBatch]</code></p>
`}}),ta=new f({props:{name:"to_pydict",anchor:"datasets.table.InMemoryTable.to_pydict",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L226",returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>dict</code></p>
`}}),aa=new f({props:{name:"to_pandas",anchor:"datasets.table.InMemoryTable.to_pandas",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"datasets.table.InMemoryTable.to_pandas.memory_pool",description:`<strong>memory_pool</strong> (<code>MemoryPool</code>, defaults to <code>None</code>) &#x2014;
Arrow MemoryPool to use for allocations. Uses the default memory
pool is not passed.`,name:"memory_pool"},{anchor:"datasets.table.InMemoryTable.to_pandas.strings_to_categorical",description:`<strong>strings_to_categorical</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Encode string (UTF8) and binary types to <code>pandas.Categorical</code>.`,name:"strings_to_categorical"},{anchor:"datasets.table.InMemoryTable.to_pandas.categories",description:`<strong>categories</strong> (<code>list</code>, defaults to <code>empty</code>) &#x2014;
List of fields that should be returned as <code>pandas.Categorical</code>. Only
applies to table-like data structures.`,name:"categories"},{anchor:"datasets.table.InMemoryTable.to_pandas.zero_copy_only",description:`<strong>zero_copy_only</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Raise an <code>ArrowException</code> if this function call would require copying
the underlying data.`,name:"zero_copy_only"},{anchor:"datasets.table.InMemoryTable.to_pandas.integer_object_nulls",description:`<strong>integer_object_nulls</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Cast integers with nulls to objects.`,name:"integer_object_nulls"},{anchor:"datasets.table.InMemoryTable.to_pandas.date_as_object",description:`<strong>date_as_object</strong> (<code>bool</code>, defaults to <code>True</code>) &#x2014;
Cast dates to objects. If <code>False</code>, convert to <code>datetime64[ns]</code> dtype.`,name:"date_as_object"},{anchor:"datasets.table.InMemoryTable.to_pandas.timestamp_as_object",description:`<strong>timestamp_as_object</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Cast non-nanosecond timestamps (<code>np.datetime64</code>) to objects. This is
useful if you have timestamps that don&#x2019;t fit in the normal date
range of nanosecond timestamps (1678 CE-2262 CE).
If <code>False</code>, all timestamps are converted to <code>datetime64[ns]</code> dtype.`,name:"timestamp_as_object"},{anchor:"datasets.table.InMemoryTable.to_pandas.use_threads",description:`<strong>use_threads</strong> (<code>bool</code>, defaults to <code>True</code>) &#x2014;
Whether to parallelize the conversion using multiple threads.`,name:"use_threads"},{anchor:"datasets.table.InMemoryTable.to_pandas.deduplicate_objects",description:`<strong>deduplicate_objects</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Do not create multiple copies Python objects when created, to save
on memory use. Conversion will be slower.`,name:"deduplicate_objects"},{anchor:"datasets.table.InMemoryTable.to_pandas.ignore_metadata",description:`<strong>ignore_metadata</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
If <code>True</code>, do not use the &#x2018;pandas&#x2019; metadata to reconstruct the
DataFrame index, if present.`,name:"ignore_metadata"},{anchor:"datasets.table.InMemoryTable.to_pandas.safe",description:`<strong>safe</strong> (<code>bool</code>, defaults to <code>True</code>) &#x2014;
For certain data types, a cast is needed in order to store the
data in a pandas DataFrame or Series (e.g. timestamps are always
stored as nanoseconds in pandas). This option controls whether it
is a safe cast or not.`,name:"safe"},{anchor:"datasets.table.InMemoryTable.to_pandas.split_blocks",description:`<strong>split_blocks</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
If <code>True</code>, generate one internal &#x201C;block&#x201D; for each column when
creating a pandas.DataFrame from a <code>RecordBatch</code> or <code>Table</code>. While this
can temporarily reduce memory note that various pandas operations
can trigger &#x201C;consolidation&#x201D; which may balloon memory use.`,name:"split_blocks"},{anchor:"datasets.table.InMemoryTable.to_pandas.self_destruct",description:`<strong>self_destruct</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
EXPERIMENTAL: If <code>True</code>, attempt to deallocate the originating Arrow
memory while converting the Arrow object to pandas. If you use the
object after calling <code>to_pandas</code> with this option it will crash your
program.`,name:"self_destruct"},{anchor:"datasets.table.InMemoryTable.to_pandas.types_mapper",description:`<strong>types_mapper</strong> (<code>function</code>, defaults to <code>None</code>) &#x2014;
A function mapping a pyarrow DataType to a pandas <code>ExtensionDtype</code>.
This can be used to override the default pandas type for conversion
of built-in pyarrow types or in absence of <code>pandas_metadata</code> in the
Table schema. The function receives a pyarrow DataType and is
expected to return a pandas <code>ExtensionDtype</code> or <code>None</code> if the
default conversion should be used for that type. If you have
a dictionary mapping, you can pass <code>dict.get</code> as function.`,name:"types_mapper"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L244",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>pandas.Series</code> or <code>pandas.DataFrame</code> depending on type of object</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>pandas.Series</code> or <code>pandas.DataFrame</code></p>
`}}),na=new f({props:{name:"to_string",anchor:"datasets.table.InMemoryTable.to_string",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L306"}}),oa=new f({props:{name:"field",anchor:"datasets.table.InMemoryTable.field",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"datasets.table.InMemoryTable.field.i",description:`<strong>i</strong> (<code>Union[int, str]</code>) &#x2014;
The index or name of the field to retrieve.`,name:"i"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L325",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>pyarrow.Field</code></p>
`}}),ra=new f({props:{name:"column",anchor:"datasets.table.InMemoryTable.column",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"datasets.table.InMemoryTable.column.i",description:`<strong>i</strong> (<code>Union[int, str]</code>) &#x2014;
The index or name of the column to retrieve.`,name:"i"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L338",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>pyarrow.ChunkedArray</code></p>
`}}),sa=new f({props:{name:"itercolumns",anchor:"datasets.table.InMemoryTable.itercolumns",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L351"}}),da=new f({props:{name:"schema",anchor:"datasets.table.InMemoryTable.schema",parameters:[],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L360",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>pyarrow.Schema</code></p>
`}}),la=new f({props:{name:"columns",anchor:"datasets.table.InMemoryTable.columns",parameters:[],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L370",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[pa.ChunkedArray]</code></p>
`}}),ca=new f({props:{name:"num_columns",anchor:"datasets.table.InMemoryTable.num_columns",parameters:[],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L380",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>int</p>
`}}),ia=new f({props:{name:"num_rows",anchor:"datasets.table.InMemoryTable.num_rows",parameters:[],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L390",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>int</p>
`}}),pa=new f({props:{name:"shape",anchor:"datasets.table.InMemoryTable.shape",parameters:[],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L403",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>Number of rows and number of columns.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>(int, int)</code></p>
`}}),ma=new f({props:{name:"nbytes",anchor:"datasets.table.InMemoryTable.nbytes",parameters:[],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L413"}}),ua=new f({props:{name:"column_names",anchor:"datasets.table.InMemoryTable.column_names",parameters:[],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L420"}}),ba=new f({props:{name:"slice",anchor:"datasets.table.InMemoryTable.slice",parameters:[{name:"offset",val:" = 0"},{name:"length",val:" = None"}],parametersDescription:[{anchor:"datasets.table.InMemoryTable.slice.offset",description:`<strong>offset</strong> (<code>int</code>, defaults to <code>0</code>) &#x2014;
Offset from start of table to slice.`,name:"offset"},{anchor:"datasets.table.InMemoryTable.slice.length",description:`<strong>length</strong> (<code>int</code>, defaults to <code>None</code>) &#x2014;
Length of slice (default is until end of table starting from
offset).`,name:"length"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L794",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>datasets.table.Table</code></p>
`}}),ga=new f({props:{name:"filter",anchor:"datasets.table.InMemoryTable.filter",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L811"}}),fa=new f({props:{name:"flatten",anchor:"datasets.table.InMemoryTable.flatten",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"datasets.table.InMemoryTable.flatten.memory_pool",description:`<strong>memory_pool</strong> (<code>MemoryPool</code>, defaults to <code>None</code>) &#x2014;
For memory allocations, if required, otherwise use default pool.`,name:"memory_pool"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L817",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>datasets.table.Table</code></p>
`}}),ha=new f({props:{name:"combine_chunks",anchor:"datasets.table.InMemoryTable.combine_chunks",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"datasets.table.InMemoryTable.combine_chunks.memory_pool",description:`<strong>memory_pool</strong> (<code>MemoryPool</code>, defaults to <code>None</code>) &#x2014;
For memory allocations, if required, otherwise use default pool.`,name:"memory_pool"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L831",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>datasets.table.Table</code></p>
`}}),va=new f({props:{name:"cast",anchor:"datasets.table.InMemoryTable.cast",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"datasets.table.InMemoryTable.cast.target_schema",description:`<strong>target_schema</strong> (<code>Schema</code>) &#x2014;
Schema to cast to, the names and order of fields must match.`,name:"target_schema"},{anchor:"datasets.table.InMemoryTable.cast.safe",description:`<strong>safe</strong> (<code>bool</code>, defaults to <code>True</code>) &#x2014;
Check for overflows or other unsafe conversions.`,name:"safe"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L847",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>datasets.table.Table</code></p>
`}}),xa=new f({props:{name:"replace_schema_metadata",anchor:"datasets.table.InMemoryTable.replace_schema_metadata",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"datasets.table.InMemoryTable.replace_schema_metadata.metadata",description:"<strong>metadata</strong> (<code>dict</code>, defaults to <code>None</code>) &#x2014;",name:"metadata"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L862",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>shallow_copy</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>datasets.table.Table</code></p>
`}}),ya=new f({props:{name:"add_column",anchor:"datasets.table.InMemoryTable.add_column",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"datasets.table.InMemoryTable.add_column.i",description:`<strong>i</strong> (<code>int</code>) &#x2014;
Index to place the column at.`,name:"i"},{anchor:"datasets.table.InMemoryTable.add_column.field_",description:`<strong>field_</strong> (<code>Union[str, pyarrow.Field]</code>) &#x2014;
If a string is passed then the type is deduced from the column
data.`,name:"field_"},{anchor:"datasets.table.InMemoryTable.add_column.column",description:`<strong>column</strong> (<code>Union[pyarrow.Array, List[pyarrow.Array]]</code>) &#x2014;
Column data.`,name:"column"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L876",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>New table with the passed column added.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>datasets.table.Table</code></p>
`}}),$a=new f({props:{name:"append_column",anchor:"datasets.table.InMemoryTable.append_column",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"datasets.table.InMemoryTable.append_column.field_",description:`<strong>field_</strong> (<code>Union[str, pyarrow.Field]</code>) &#x2014;
If a string is passed then the type is deduced from the column
data.`,name:"field_"},{anchor:"datasets.table.InMemoryTable.append_column.column",description:`<strong>column</strong> (<code>Union[pyarrow.Array, List[pyarrow.Array]]</code>) &#x2014;
Column data.`,name:"column"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L897",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>New table with the passed column added.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>datasets.table.Table</code></p>
`}}),_a=new f({props:{name:"remove_column",anchor:"datasets.table.InMemoryTable.remove_column",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"datasets.table.InMemoryTable.remove_column.i",description:`<strong>i</strong> (<code>int</code>) &#x2014;
Index of column to remove.`,name:"i"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L914",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>New table without the column.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>datasets.table.Table</code></p>
`}}),Ta=new f({props:{name:"set_column",anchor:"datasets.table.InMemoryTable.set_column",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"datasets.table.InMemoryTable.set_column.i",description:`<strong>i</strong> (<code>int</code>) &#x2014;
Index to place the column at.`,name:"i"},{anchor:"datasets.table.InMemoryTable.set_column.field_",description:`<strong>field_</strong> (<code>Union[str, pyarrow.Field]</code>) &#x2014;
If a string is passed then the type is deduced from the column
data.`,name:"field_"},{anchor:"datasets.table.InMemoryTable.set_column.column",description:`<strong>column</strong> (<code>Union[pyarrow.Array, List[pyarrow.Array]]</code>) &#x2014;
Column data.`,name:"column"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L928",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>New table with the passed column set.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>datasets.table.Table</code></p>
`}}),wa=new f({props:{name:"rename_columns",anchor:"datasets.table.InMemoryTable.rename_columns",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L947"}}),Ca=new f({props:{name:"select",anchor:"datasets.table.InMemoryTable.select",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"datasets.table.InMemoryTable.select.columns",description:`<strong>columns</strong> (<code>Union[List[str], List[int]]</code>) &#x2014;
The column names or integer indices to select.`,name:"columns"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L970",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>New table with the specified columns, and metadata preserved.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/datasets/v3.6.0/en/package_reference/table_classes#datasets.table.Table"
>datasets.table.Table</a></p>
`}}),Ma=new f({props:{name:"drop",anchor:"datasets.table.InMemoryTable.drop",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"datasets.table.InMemoryTable.drop.columns",description:`<strong>columns</strong> (<code>List[str]</code>) &#x2014;
List of field names referencing existing columns.`,name:"columns"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L953",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>New table without the columns.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>datasets.table.Table</code></p>
`,raiseDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<ul>
<li><code>KeyError</code> — : if any of the passed columns name are not existing.</li>
</ul>
`,raiseType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>KeyError</code></p>
`}}),Da=new f({props:{name:"from_file",anchor:"datasets.table.InMemoryTable.from_file",parameters:[{name:"filename",val:": str"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L654"}}),Ia=new f({props:{name:"from_buffer",anchor:"datasets.table.InMemoryTable.from_buffer",parameters:[{name:"buffer",val:": Buffer"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L659"}}),ka=new f({props:{name:"from_pandas",anchor:"datasets.table.InMemoryTable.from_pandas",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"datasets.table.InMemoryTable.from_pandas.df",description:"<strong>df</strong> (<code>pandas.DataFrame</code>) &#x2014;",name:"df"},{anchor:"datasets.table.InMemoryTable.from_pandas.schema",description:`<strong>schema</strong> (<code>pyarrow.Schema</code>, <em>optional</em>) &#x2014;
The expected schema of the Arrow Table. This can be used to
indicate the type of columns if we cannot infer it automatically.
If passed, the output will have exactly this schema. Columns
specified in the schema that are not found in the DataFrame columns
or its index will raise an error. Additional columns or index
levels in the DataFrame which are not specified in the schema will
be ignored.`,name:"schema"},{anchor:"datasets.table.InMemoryTable.from_pandas.preserve_index",description:`<strong>preserve_index</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to store the index as an additional column in the resulting
<code>Table</code>. The default of None will store the index as a column,
except for RangeIndex which is stored as metadata only. Use
<code>preserve_index=True</code> to force it to be stored as a column.`,name:"preserve_index"},{anchor:"datasets.table.InMemoryTable.from_pandas.nthreads",description:`<strong>nthreads</strong> (<code>int</code>, defaults to <code>None</code> (may use up to system CPU count threads)) &#x2014;
If greater than 1, convert columns to Arrow in parallel using
indicated number of threads.`,name:"nthreads"},{anchor:"datasets.table.InMemoryTable.from_pandas.columns",description:`<strong>columns</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
List of column to be converted. If <code>None</code>, use all columns.`,name:"columns"},{anchor:"datasets.table.InMemoryTable.from_pandas.safe",description:`<strong>safe</strong> (<code>bool</code>, defaults to <code>True</code>) &#x2014;
Check for overflows or other unsafe conversions,`,name:"safe"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L664",returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>datasets.table.Table</code></p>
`}}),Fe=new Ef({props:{anchor:"datasets.table.InMemoryTable.from_pandas.example",$$slots:{default:[Vf]},$$scope:{ctx:nd}}}),La=new f({props:{name:"from_arrays",anchor:"datasets.table.InMemoryTable.from_arrays",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"datasets.table.InMemoryTable.from_arrays.arrays",description:`<strong>arrays</strong> (<code>List[Union[pyarrow.Array, pyarrow.ChunkedArray]]</code>) &#x2014;
Equal-length arrays that should form the table.`,name:"arrays"},{anchor:"datasets.table.InMemoryTable.from_arrays.names",description:`<strong>names</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
Names for the table columns. If not passed, schema must be passed.`,name:"names"},{anchor:"datasets.table.InMemoryTable.from_arrays.schema",description:`<strong>schema</strong> (<code>Schema</code>, defaults to <code>None</code>) &#x2014;
Schema for the created table. If not passed, names must be passed.`,name:"schema"},{anchor:"datasets.table.InMemoryTable.from_arrays.metadata",description:`<strong>metadata</strong> (<code>Union[dict, Mapping]</code>, defaults to <code>None</code>) &#x2014;
Optional metadata for the schema (if inferred).`,name:"metadata"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L722",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>datasets.table.Table</code></p>
`}}),Pa=new f({props:{name:"from_pydict",anchor:"datasets.table.InMemoryTable.from_pydict",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"datasets.table.InMemoryTable.from_pydict.mapping",description:`<strong>mapping</strong> (<code>Union[dict, Mapping]</code>) &#x2014;
A mapping of strings to Arrays or Python lists.`,name:"mapping"},{anchor:"datasets.table.InMemoryTable.from_pydict.schema",description:`<strong>schema</strong> (<code>Schema</code>, defaults to <code>None</code>) &#x2014;
If not passed, will be inferred from the Mapping values`,name:"schema"},{anchor:"datasets.table.InMemoryTable.from_pydict.metadata",description:`<strong>metadata</strong> (<code>Union[dict, Mapping]</code>, defaults to <code>None</code>) &#x2014;
Optional metadata for the schema (if inferred).`,name:"metadata"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L742",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>datasets.table.Table</code></p>
`}}),Ea=new f({props:{name:"from_batches",anchor:"datasets.table.InMemoryTable.from_batches",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"datasets.table.InMemoryTable.from_batches.batches",description:`<strong>batches</strong> (<code>Union[Sequence[pyarrow.RecordBatch], Iterator[pyarrow.RecordBatch]]</code>) &#x2014;
Sequence of <code>RecordBatch</code> to be converted, all schemas must be equal.`,name:"batches"},{anchor:"datasets.table.InMemoryTable.from_batches.schema",description:`<strong>schema</strong> (<code>Schema</code>, defaults to <code>None</code>) &#x2014;
If not passed, will be inferred from the first <code>RecordBatch</code>.`,name:"schema"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L778",returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>datasets.table.Table</code></p>
`}}),ja=new td({props:{title:"MemoryMappedTable",local:"datasets.table.MemoryMappedTable",headingTag:"h2"}}),Va=new f({props:{name:"class datasets.table.MemoryMappedTable",anchor:"datasets.table.MemoryMappedTable",parameters:[{name:"table",val:": Table"},{name:"path",val:": str"},{name:"replays",val:": typing.Optional[list[tuple[str, tuple, dict]]] = None"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L990"}}),Fa=new f({props:{name:"validate",anchor:"datasets.table.MemoryMappedTable.validate",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"datasets.table.MemoryMappedTable.validate.full",description:`<strong>full</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
If <code>True</code>, run expensive checks, otherwise cheap checks only.`,name:"full"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L179",raiseDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<ul>
<li><code>pa.lib.ArrowInvalid</code> — if validation fails</li>
</ul>
`,raiseType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>pa.lib.ArrowInvalid</code></p>
`}}),Aa=new f({props:{name:"equals",anchor:"datasets.table.MemoryMappedTable.equals",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"datasets.table.MemoryMappedTable.equals.other",description:`<strong>other</strong> (<a href="/docs/datasets/v3.6.0/en/package_reference/table_classes#datasets.table.Table">Table</a>) &#x2014;
Table to compare against.`,name:"other"},{anchor:"datasets.table.MemoryMappedTable.equals.check_metadata",description:`<strong>check_metadata</strong> <code>bool</code>, defaults to <code>False</code>) &#x2014;
Whether schema metadata equality should be checked as well.`,name:"check_metadata"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L195",returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>bool</code></p>
`}}),Na=new f({props:{name:"to_batches",anchor:"datasets.table.MemoryMappedTable.to_batches",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"datasets.table.MemoryMappedTable.to_batches.max_chunksize",description:`<strong>max_chunksize</strong> (<code>int</code>, defaults to <code>None</code>) &#x2014;
Maximum size for <code>RecordBatch</code> chunks. Individual chunks may be
smaller depending on the chunk layout of individual columns.`,name:"max_chunksize"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L212",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[pyarrow.RecordBatch]</code></p>
`}}),qa=new f({props:{name:"to_pydict",anchor:"datasets.table.MemoryMappedTable.to_pydict",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L226",returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>dict</code></p>
`}}),Ha=new f({props:{name:"to_pandas",anchor:"datasets.table.MemoryMappedTable.to_pandas",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"datasets.table.MemoryMappedTable.to_pandas.memory_pool",description:`<strong>memory_pool</strong> (<code>MemoryPool</code>, defaults to <code>None</code>) &#x2014;
Arrow MemoryPool to use for allocations. Uses the default memory
pool is not passed.`,name:"memory_pool"},{anchor:"datasets.table.MemoryMappedTable.to_pandas.strings_to_categorical",description:`<strong>strings_to_categorical</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Encode string (UTF8) and binary types to <code>pandas.Categorical</code>.`,name:"strings_to_categorical"},{anchor:"datasets.table.MemoryMappedTable.to_pandas.categories",description:`<strong>categories</strong> (<code>list</code>, defaults to <code>empty</code>) &#x2014;
List of fields that should be returned as <code>pandas.Categorical</code>. Only
applies to table-like data structures.`,name:"categories"},{anchor:"datasets.table.MemoryMappedTable.to_pandas.zero_copy_only",description:`<strong>zero_copy_only</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Raise an <code>ArrowException</code> if this function call would require copying
the underlying data.`,name:"zero_copy_only"},{anchor:"datasets.table.MemoryMappedTable.to_pandas.integer_object_nulls",description:`<strong>integer_object_nulls</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Cast integers with nulls to objects.`,name:"integer_object_nulls"},{anchor:"datasets.table.MemoryMappedTable.to_pandas.date_as_object",description:`<strong>date_as_object</strong> (<code>bool</code>, defaults to <code>True</code>) &#x2014;
Cast dates to objects. If <code>False</code>, convert to <code>datetime64[ns]</code> dtype.`,name:"date_as_object"},{anchor:"datasets.table.MemoryMappedTable.to_pandas.timestamp_as_object",description:`<strong>timestamp_as_object</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Cast non-nanosecond timestamps (<code>np.datetime64</code>) to objects. This is
useful if you have timestamps that don&#x2019;t fit in the normal date
range of nanosecond timestamps (1678 CE-2262 CE).
If <code>False</code>, all timestamps are converted to <code>datetime64[ns]</code> dtype.`,name:"timestamp_as_object"},{anchor:"datasets.table.MemoryMappedTable.to_pandas.use_threads",description:`<strong>use_threads</strong> (<code>bool</code>, defaults to <code>True</code>) &#x2014;
Whether to parallelize the conversion using multiple threads.`,name:"use_threads"},{anchor:"datasets.table.MemoryMappedTable.to_pandas.deduplicate_objects",description:`<strong>deduplicate_objects</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Do not create multiple copies Python objects when created, to save
on memory use. Conversion will be slower.`,name:"deduplicate_objects"},{anchor:"datasets.table.MemoryMappedTable.to_pandas.ignore_metadata",description:`<strong>ignore_metadata</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
If <code>True</code>, do not use the &#x2018;pandas&#x2019; metadata to reconstruct the
DataFrame index, if present.`,name:"ignore_metadata"},{anchor:"datasets.table.MemoryMappedTable.to_pandas.safe",description:`<strong>safe</strong> (<code>bool</code>, defaults to <code>True</code>) &#x2014;
For certain data types, a cast is needed in order to store the
data in a pandas DataFrame or Series (e.g. timestamps are always
stored as nanoseconds in pandas). This option controls whether it
is a safe cast or not.`,name:"safe"},{anchor:"datasets.table.MemoryMappedTable.to_pandas.split_blocks",description:`<strong>split_blocks</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
If <code>True</code>, generate one internal &#x201C;block&#x201D; for each column when
creating a pandas.DataFrame from a <code>RecordBatch</code> or <code>Table</code>. While this
can temporarily reduce memory note that various pandas operations
can trigger &#x201C;consolidation&#x201D; which may balloon memory use.`,name:"split_blocks"},{anchor:"datasets.table.MemoryMappedTable.to_pandas.self_destruct",description:`<strong>self_destruct</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
EXPERIMENTAL: If <code>True</code>, attempt to deallocate the originating Arrow
memory while converting the Arrow object to pandas. If you use the
object after calling <code>to_pandas</code> with this option it will crash your
program.`,name:"self_destruct"},{anchor:"datasets.table.MemoryMappedTable.to_pandas.types_mapper",description:`<strong>types_mapper</strong> (<code>function</code>, defaults to <code>None</code>) &#x2014;
A function mapping a pyarrow DataType to a pandas <code>ExtensionDtype</code>.
This can be used to override the default pandas type for conversion
of built-in pyarrow types or in absence of <code>pandas_metadata</code> in the
Table schema. The function receives a pyarrow DataType and is
expected to return a pandas <code>ExtensionDtype</code> or <code>None</code> if the
default conversion should be used for that type. If you have
a dictionary mapping, you can pass <code>dict.get</code> as function.`,name:"types_mapper"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L244",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>pandas.Series</code> or <code>pandas.DataFrame</code> depending on type of object</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>pandas.Series</code> or <code>pandas.DataFrame</code></p>
`}}),Sa=new f({props:{name:"to_string",anchor:"datasets.table.MemoryMappedTable.to_string",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L306"}}),za=new f({props:{name:"field",anchor:"datasets.table.MemoryMappedTable.field",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"datasets.table.MemoryMappedTable.field.i",description:`<strong>i</strong> (<code>Union[int, str]</code>) &#x2014;
The index or name of the field to retrieve.`,name:"i"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L325",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>pyarrow.Field</code></p>
`}}),Ua=new f({props:{name:"column",anchor:"datasets.table.MemoryMappedTable.column",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"datasets.table.MemoryMappedTable.column.i",description:`<strong>i</strong> (<code>Union[int, str]</code>) &#x2014;
The index or name of the column to retrieve.`,name:"i"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L338",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>pyarrow.ChunkedArray</code></p>
`}}),Ra=new f({props:{name:"itercolumns",anchor:"datasets.table.MemoryMappedTable.itercolumns",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L351"}}),Ba=new f({props:{name:"schema",anchor:"datasets.table.MemoryMappedTable.schema",parameters:[],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L360",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>pyarrow.Schema</code></p>
`}}),Oa=new f({props:{name:"columns",anchor:"datasets.table.MemoryMappedTable.columns",parameters:[],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L370",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[pa.ChunkedArray]</code></p>
`}}),Wa=new f({props:{name:"num_columns",anchor:"datasets.table.MemoryMappedTable.num_columns",parameters:[],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L380",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>int</p>
`}}),Xa=new f({props:{name:"num_rows",anchor:"datasets.table.MemoryMappedTable.num_rows",parameters:[],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L390",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>int</p>
`}}),Ga=new f({props:{name:"shape",anchor:"datasets.table.MemoryMappedTable.shape",parameters:[],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L403",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>Number of rows and number of columns.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>(int, int)</code></p>
`}}),Ja=new f({props:{name:"nbytes",anchor:"datasets.table.MemoryMappedTable.nbytes",parameters:[],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L413"}}),Ya=new f({props:{name:"column_names",anchor:"datasets.table.MemoryMappedTable.column_names",parameters:[],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L420"}}),Ka=new f({props:{name:"slice",anchor:"datasets.table.MemoryMappedTable.slice",parameters:[{name:"offset",val:" = 0"},{name:"length",val:" = None"}],parametersDescription:[{anchor:"datasets.table.MemoryMappedTable.slice.offset",description:`<strong>offset</strong> (<code>int</code>, defaults to <code>0</code>) &#x2014;
Offset from start of table to slice.`,name:"offset"},{anchor:"datasets.table.MemoryMappedTable.slice.length",description:`<strong>length</strong> (<code>int</code>, defaults to <code>None</code>) &#x2014;
Length of slice (default is until end of table starting from
offset).`,name:"length"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L1049",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>datasets.table.Table</code></p>
`}}),Za=new f({props:{name:"filter",anchor:"datasets.table.MemoryMappedTable.filter",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L1068"}}),Qa=new f({props:{name:"flatten",anchor:"datasets.table.MemoryMappedTable.flatten",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"datasets.table.MemoryMappedTable.flatten.memory_pool",description:`<strong>memory_pool</strong> (<code>MemoryPool</code>, defaults to <code>None</code>) &#x2014;
For memory allocations, if required, otherwise use default pool.`,name:"memory_pool"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L1076",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>datasets.table.Table</code></p>
`}}),en=new f({props:{name:"combine_chunks",anchor:"datasets.table.MemoryMappedTable.combine_chunks",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"datasets.table.MemoryMappedTable.combine_chunks.memory_pool",description:`<strong>memory_pool</strong> (<code>MemoryPool</code>, defaults to <code>None</code>) &#x2014;
For memory allocations, if required, otherwise use default pool.`,name:"memory_pool"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L1092",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>datasets.table.Table</code></p>
`}}),tn=new f({props:{name:"cast",anchor:"datasets.table.MemoryMappedTable.cast",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"datasets.table.MemoryMappedTable.cast.target_schema",description:`<strong>target_schema</strong> (<code>Schema</code>) &#x2014;
Schema to cast to, the names and order of fields must match.`,name:"target_schema"},{anchor:"datasets.table.MemoryMappedTable.cast.safe",description:`<strong>safe</strong> (<code>bool</code>, defaults to <code>True</code>) &#x2014;
Check for overflows or other unsafe conversions.`,name:"safe"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L1110",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>datasets.table.Table</code></p>
`}}),an=new f({props:{name:"replace_schema_metadata",anchor:"datasets.table.MemoryMappedTable.replace_schema_metadata",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"datasets.table.MemoryMappedTable.replace_schema_metadata.metadata",description:"<strong>metadata</strong> (<code>dict</code>, defaults to <code>None</code>) &#x2014;",name:"metadata"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L1127",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>shallow_copy</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>datasets.table.Table</code></p>
`}}),nn=new f({props:{name:"add_column",anchor:"datasets.table.MemoryMappedTable.add_column",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"datasets.table.MemoryMappedTable.add_column.i",description:`<strong>i</strong> (<code>int</code>) &#x2014;
Index to place the column at.`,name:"i"},{anchor:"datasets.table.MemoryMappedTable.add_column.field_",description:`<strong>field_</strong> (<code>Union[str, pyarrow.Field]</code>) &#x2014;
If a string is passed then the type is deduced from the column
data.`,name:"field_"},{anchor:"datasets.table.MemoryMappedTable.add_column.column",description:`<strong>column</strong> (<code>Union[pyarrow.Array, List[pyarrow.Array]]</code>) &#x2014;
Column data.`,name:"column"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L1143",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>New table with the passed column added.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>datasets.table.Table</code></p>
`}}),on=new f({props:{name:"append_column",anchor:"datasets.table.MemoryMappedTable.append_column",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"datasets.table.MemoryMappedTable.append_column.field_",description:`<strong>field_</strong> (<code>Union[str, pyarrow.Field]</code>) &#x2014;
If a string is passed then the type is deduced from the column
data.`,name:"field_"},{anchor:"datasets.table.MemoryMappedTable.append_column.column",description:`<strong>column</strong> (<code>Union[pyarrow.Array, List[pyarrow.Array]]</code>) &#x2014;
Column data.`,name:"column"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L1166",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>New table with the passed column added.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>datasets.table.Table</code></p>
`}}),rn=new f({props:{name:"remove_column",anchor:"datasets.table.MemoryMappedTable.remove_column",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"datasets.table.MemoryMappedTable.remove_column.i",description:`<strong>i</strong> (<code>int</code>) &#x2014;
Index of column to remove.`,name:"i"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L1185",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>New table without the column.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>datasets.table.Table</code></p>
`}}),sn=new f({props:{name:"set_column",anchor:"datasets.table.MemoryMappedTable.set_column",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"datasets.table.MemoryMappedTable.set_column.i",description:`<strong>i</strong> (<code>int</code>) &#x2014;
Index to place the column at.`,name:"i"},{anchor:"datasets.table.MemoryMappedTable.set_column.field_",description:`<strong>field_</strong> (<code>Union[str, pyarrow.Field]</code>) &#x2014;
If a string is passed then the type is deduced from the column
data.`,name:"field_"},{anchor:"datasets.table.MemoryMappedTable.set_column.column",description:`<strong>column</strong> (<code>Union[pyarrow.Array, List[pyarrow.Array]]</code>) &#x2014;
Column data.`,name:"column"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L1201",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>New table with the passed column set.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>datasets.table.Table</code></p>
`}}),dn=new f({props:{name:"rename_columns",anchor:"datasets.table.MemoryMappedTable.rename_columns",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L1222"}}),ln=new f({props:{name:"select",anchor:"datasets.table.MemoryMappedTable.select",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"datasets.table.MemoryMappedTable.select.columns",description:`<strong>columns</strong> (<code>Union[List[str], List[int]]</code>) &#x2014;
The column names or integer indices to select.`,name:"columns"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L1249",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>New table with the specified columns, and metadata preserved.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/datasets/v3.6.0/en/package_reference/table_classes#datasets.table.Table"
>datasets.table.Table</a></p>
`}}),cn=new f({props:{name:"drop",anchor:"datasets.table.MemoryMappedTable.drop",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"datasets.table.MemoryMappedTable.drop.columns",description:`<strong>columns</strong> (<code>List[str]</code>) &#x2014;
List of field names referencing existing columns.`,name:"columns"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L1230",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>New table without the columns.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>datasets.table.Table</code></p>
`,raiseDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<ul>
<li><code>KeyError</code> — : if any of the passed columns name are not existing.</li>
</ul>
`,raiseType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>KeyError</code></p>
`}}),pn=new f({props:{name:"from_file",anchor:"datasets.table.MemoryMappedTable.from_file",parameters:[{name:"filename",val:": str"},{name:"replays",val:" = None"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L1016"}}),mn=new td({props:{title:"ConcatenationTable",local:"datasets.table.ConcatenationTable",headingTag:"h2"}}),un=new f({props:{name:"class datasets.table.ConcatenationTable",anchor:"datasets.table.ConcatenationTable",parameters:[{name:"table",val:": Table"},{name:"blocks",val:": list"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L1274"}}),bn=new f({props:{name:"validate",anchor:"datasets.table.ConcatenationTable.validate",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"datasets.table.ConcatenationTable.validate.full",description:`<strong>full</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
If <code>True</code>, run expensive checks, otherwise cheap checks only.`,name:"full"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L179",raiseDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<ul>
<li><code>pa.lib.ArrowInvalid</code> — if validation fails</li>
</ul>
`,raiseType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>pa.lib.ArrowInvalid</code></p>
`}}),gn=new f({props:{name:"equals",anchor:"datasets.table.ConcatenationTable.equals",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"datasets.table.ConcatenationTable.equals.other",description:`<strong>other</strong> (<a href="/docs/datasets/v3.6.0/en/package_reference/table_classes#datasets.table.Table">Table</a>) &#x2014;
Table to compare against.`,name:"other"},{anchor:"datasets.table.ConcatenationTable.equals.check_metadata",description:`<strong>check_metadata</strong> <code>bool</code>, defaults to <code>False</code>) &#x2014;
Whether schema metadata equality should be checked as well.`,name:"check_metadata"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L195",returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>bool</code></p>
`}}),fn=new f({props:{name:"to_batches",anchor:"datasets.table.ConcatenationTable.to_batches",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"datasets.table.ConcatenationTable.to_batches.max_chunksize",description:`<strong>max_chunksize</strong> (<code>int</code>, defaults to <code>None</code>) &#x2014;
Maximum size for <code>RecordBatch</code> chunks. Individual chunks may be
smaller depending on the chunk layout of individual columns.`,name:"max_chunksize"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L212",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[pyarrow.RecordBatch]</code></p>
`}}),hn=new f({props:{name:"to_pydict",anchor:"datasets.table.ConcatenationTable.to_pydict",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L226",returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>dict</code></p>
`}}),vn=new f({props:{name:"to_pandas",anchor:"datasets.table.ConcatenationTable.to_pandas",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"datasets.table.ConcatenationTable.to_pandas.memory_pool",description:`<strong>memory_pool</strong> (<code>MemoryPool</code>, defaults to <code>None</code>) &#x2014;
Arrow MemoryPool to use for allocations. Uses the default memory
pool is not passed.`,name:"memory_pool"},{anchor:"datasets.table.ConcatenationTable.to_pandas.strings_to_categorical",description:`<strong>strings_to_categorical</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Encode string (UTF8) and binary types to <code>pandas.Categorical</code>.`,name:"strings_to_categorical"},{anchor:"datasets.table.ConcatenationTable.to_pandas.categories",description:`<strong>categories</strong> (<code>list</code>, defaults to <code>empty</code>) &#x2014;
List of fields that should be returned as <code>pandas.Categorical</code>. Only
applies to table-like data structures.`,name:"categories"},{anchor:"datasets.table.ConcatenationTable.to_pandas.zero_copy_only",description:`<strong>zero_copy_only</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Raise an <code>ArrowException</code> if this function call would require copying
the underlying data.`,name:"zero_copy_only"},{anchor:"datasets.table.ConcatenationTable.to_pandas.integer_object_nulls",description:`<strong>integer_object_nulls</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Cast integers with nulls to objects.`,name:"integer_object_nulls"},{anchor:"datasets.table.ConcatenationTable.to_pandas.date_as_object",description:`<strong>date_as_object</strong> (<code>bool</code>, defaults to <code>True</code>) &#x2014;
Cast dates to objects. If <code>False</code>, convert to <code>datetime64[ns]</code> dtype.`,name:"date_as_object"},{anchor:"datasets.table.ConcatenationTable.to_pandas.timestamp_as_object",description:`<strong>timestamp_as_object</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Cast non-nanosecond timestamps (<code>np.datetime64</code>) to objects. This is
useful if you have timestamps that don&#x2019;t fit in the normal date
range of nanosecond timestamps (1678 CE-2262 CE).
If <code>False</code>, all timestamps are converted to <code>datetime64[ns]</code> dtype.`,name:"timestamp_as_object"},{anchor:"datasets.table.ConcatenationTable.to_pandas.use_threads",description:`<strong>use_threads</strong> (<code>bool</code>, defaults to <code>True</code>) &#x2014;
Whether to parallelize the conversion using multiple threads.`,name:"use_threads"},{anchor:"datasets.table.ConcatenationTable.to_pandas.deduplicate_objects",description:`<strong>deduplicate_objects</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
Do not create multiple copies Python objects when created, to save
on memory use. Conversion will be slower.`,name:"deduplicate_objects"},{anchor:"datasets.table.ConcatenationTable.to_pandas.ignore_metadata",description:`<strong>ignore_metadata</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
If <code>True</code>, do not use the &#x2018;pandas&#x2019; metadata to reconstruct the
DataFrame index, if present.`,name:"ignore_metadata"},{anchor:"datasets.table.ConcatenationTable.to_pandas.safe",description:`<strong>safe</strong> (<code>bool</code>, defaults to <code>True</code>) &#x2014;
For certain data types, a cast is needed in order to store the
data in a pandas DataFrame or Series (e.g. timestamps are always
stored as nanoseconds in pandas). This option controls whether it
is a safe cast or not.`,name:"safe"},{anchor:"datasets.table.ConcatenationTable.to_pandas.split_blocks",description:`<strong>split_blocks</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
If <code>True</code>, generate one internal &#x201C;block&#x201D; for each column when
creating a pandas.DataFrame from a <code>RecordBatch</code> or <code>Table</code>. While this
can temporarily reduce memory note that various pandas operations
can trigger &#x201C;consolidation&#x201D; which may balloon memory use.`,name:"split_blocks"},{anchor:"datasets.table.ConcatenationTable.to_pandas.self_destruct",description:`<strong>self_destruct</strong> (<code>bool</code>, defaults to <code>False</code>) &#x2014;
EXPERIMENTAL: If <code>True</code>, attempt to deallocate the originating Arrow
memory while converting the Arrow object to pandas. If you use the
object after calling <code>to_pandas</code> with this option it will crash your
program.`,name:"self_destruct"},{anchor:"datasets.table.ConcatenationTable.to_pandas.types_mapper",description:`<strong>types_mapper</strong> (<code>function</code>, defaults to <code>None</code>) &#x2014;
A function mapping a pyarrow DataType to a pandas <code>ExtensionDtype</code>.
This can be used to override the default pandas type for conversion
of built-in pyarrow types or in absence of <code>pandas_metadata</code> in the
Table schema. The function receives a pyarrow DataType and is
expected to return a pandas <code>ExtensionDtype</code> or <code>None</code> if the
default conversion should be used for that type. If you have
a dictionary mapping, you can pass <code>dict.get</code> as function.`,name:"types_mapper"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L244",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>pandas.Series</code> or <code>pandas.DataFrame</code> depending on type of object</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>pandas.Series</code> or <code>pandas.DataFrame</code></p>
`}}),xn=new f({props:{name:"to_string",anchor:"datasets.table.ConcatenationTable.to_string",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L306"}}),yn=new f({props:{name:"field",anchor:"datasets.table.ConcatenationTable.field",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"datasets.table.ConcatenationTable.field.i",description:`<strong>i</strong> (<code>Union[int, str]</code>) &#x2014;
The index or name of the field to retrieve.`,name:"i"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L325",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>pyarrow.Field</code></p>
`}}),$n=new f({props:{name:"column",anchor:"datasets.table.ConcatenationTable.column",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"datasets.table.ConcatenationTable.column.i",description:`<strong>i</strong> (<code>Union[int, str]</code>) &#x2014;
The index or name of the column to retrieve.`,name:"i"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L338",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>pyarrow.ChunkedArray</code></p>
`}}),_n=new f({props:{name:"itercolumns",anchor:"datasets.table.ConcatenationTable.itercolumns",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L351"}}),Tn=new f({props:{name:"schema",anchor:"datasets.table.ConcatenationTable.schema",parameters:[],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L360",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>pyarrow.Schema</code></p>
`}}),wn=new f({props:{name:"columns",anchor:"datasets.table.ConcatenationTable.columns",parameters:[],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L370",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[pa.ChunkedArray]</code></p>
`}}),Cn=new f({props:{name:"num_columns",anchor:"datasets.table.ConcatenationTable.num_columns",parameters:[],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L380",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>int</p>
`}}),Mn=new f({props:{name:"num_rows",anchor:"datasets.table.ConcatenationTable.num_rows",parameters:[],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L390",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>int</p>
`}}),Dn=new f({props:{name:"shape",anchor:"datasets.table.ConcatenationTable.shape",parameters:[],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L403",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>Number of rows and number of columns.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>(int, int)</code></p>
`}}),In=new f({props:{name:"nbytes",anchor:"datasets.table.ConcatenationTable.nbytes",parameters:[],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L413"}}),kn=new f({props:{name:"column_names",anchor:"datasets.table.ConcatenationTable.column_names",parameters:[],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L420"}}),Ln=new f({props:{name:"slice",anchor:"datasets.table.ConcatenationTable.slice",parameters:[{name:"offset",val:" = 0"},{name:"length",val:" = None"}],parametersDescription:[{anchor:"datasets.table.ConcatenationTable.slice.offset",description:`<strong>offset</strong> (<code>int</code>, defaults to <code>0</code>) &#x2014;
Offset from start of table to slice.`,name:"offset"},{anchor:"datasets.table.ConcatenationTable.slice.length",description:`<strong>length</strong> (<code>int</code>, defaults to <code>None</code>) &#x2014;
Length of slice (default is until end of table starting from
offset).`,name:"length"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L1483",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>datasets.table.Table</code></p>
`}}),Pn=new f({props:{name:"filter",anchor:"datasets.table.ConcatenationTable.filter",parameters:[{name:"mask",val:""},{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L1514"}}),En=new f({props:{name:"flatten",anchor:"datasets.table.ConcatenationTable.flatten",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"datasets.table.ConcatenationTable.flatten.memory_pool",description:`<strong>memory_pool</strong> (<code>MemoryPool</code>, defaults to <code>None</code>) &#x2014;
For memory allocations, if required, otherwise use default pool.`,name:"memory_pool"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L1525",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>datasets.table.Table</code></p>
`}}),jn=new f({props:{name:"combine_chunks",anchor:"datasets.table.ConcatenationTable.combine_chunks",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"datasets.table.ConcatenationTable.combine_chunks.memory_pool",description:`<strong>memory_pool</strong> (<code>MemoryPool</code>, defaults to <code>None</code>) &#x2014;
For memory allocations, if required, otherwise use default pool.`,name:"memory_pool"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L1543",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>datasets.table.Table</code></p>
`}}),Vn=new f({props:{name:"cast",anchor:"datasets.table.ConcatenationTable.cast",parameters:[{name:"target_schema",val:""},{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"datasets.table.ConcatenationTable.cast.target_schema",description:`<strong>target_schema</strong> (<code>Schema</code>) &#x2014;
Schema to cast to, the names and order of fields must match.`,name:"target_schema"},{anchor:"datasets.table.ConcatenationTable.cast.safe",description:`<strong>safe</strong> (<code>bool</code>, defaults to <code>True</code>) &#x2014;
Check for overflows or other unsafe conversions.`,name:"safe"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L1563",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>datasets.table.Table</code></p>
`}}),Fn=new f({props:{name:"replace_schema_metadata",anchor:"datasets.table.ConcatenationTable.replace_schema_metadata",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"datasets.table.ConcatenationTable.replace_schema_metadata.metadata",description:"<strong>metadata</strong> (<code>dict</code>, defaults to <code>None</code>) &#x2014;",name:"metadata"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L1594",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>shallow_copy</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>datasets.table.Table</code></p>
`}}),An=new f({props:{name:"add_column",anchor:"datasets.table.ConcatenationTable.add_column",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"datasets.table.ConcatenationTable.add_column.i",description:`<strong>i</strong> (<code>int</code>) &#x2014;
Index to place the column at.`,name:"i"},{anchor:"datasets.table.ConcatenationTable.add_column.field_",description:`<strong>field_</strong> (<code>Union[str, pyarrow.Field]</code>) &#x2014;
If a string is passed then the type is deduced from the column
data.`,name:"field_"},{anchor:"datasets.table.ConcatenationTable.add_column.column",description:`<strong>column</strong> (<code>Union[pyarrow.Array, List[pyarrow.Array]]</code>) &#x2014;
Column data.`,name:"column"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L1612",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>New table with the passed column added.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>datasets.table.Table</code></p>
`}}),Nn=new f({props:{name:"append_column",anchor:"datasets.table.ConcatenationTable.append_column",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"datasets.table.ConcatenationTable.append_column.field_",description:`<strong>field_</strong> (<code>Union[str, pyarrow.Field]</code>) &#x2014;
If a string is passed then the type is deduced from the column
data.`,name:"field_"},{anchor:"datasets.table.ConcatenationTable.append_column.column",description:`<strong>column</strong> (<code>Union[pyarrow.Array, List[pyarrow.Array]]</code>) &#x2014;
Column data.`,name:"column"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L1633",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>New table with the passed column added.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>datasets.table.Table</code></p>
`}}),qn=new f({props:{name:"remove_column",anchor:"datasets.table.ConcatenationTable.remove_column",parameters:[{name:"i",val:""},{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"datasets.table.ConcatenationTable.remove_column.i",description:`<strong>i</strong> (<code>int</code>) &#x2014;
Index of column to remove.`,name:"i"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L1650",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>New table without the column.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>datasets.table.Table</code></p>
`}}),Hn=new f({props:{name:"set_column",anchor:"datasets.table.ConcatenationTable.set_column",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"datasets.table.ConcatenationTable.set_column.i",description:`<strong>i</strong> (<code>int</code>) &#x2014;
Index to place the column at.`,name:"i"},{anchor:"datasets.table.ConcatenationTable.set_column.field_",description:`<strong>field_</strong> (<code>Union[str, pyarrow.Field]</code>) &#x2014;
If a string is passed then the type is deduced from the column
data.`,name:"field_"},{anchor:"datasets.table.ConcatenationTable.set_column.column",description:`<strong>column</strong> (<code>Union[pyarrow.Array, List[pyarrow.Array]]</code>) &#x2014;
Column data.`,name:"column"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L1674",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>New table with the passed column set.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>datasets.table.Table</code></p>
`}}),Sn=new f({props:{name:"rename_columns",anchor:"datasets.table.ConcatenationTable.rename_columns",parameters:[{name:"names",val:""},{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L1693"}}),zn=new f({props:{name:"select",anchor:"datasets.table.ConcatenationTable.select",parameters:[{name:"columns",val:""},{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"datasets.table.ConcatenationTable.select.columns",description:`<strong>columns</strong> (<code>Union[List[str], List[int]]</code>) &#x2014;
The column names or integer indices to select.`,name:"columns"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L1727",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>New table with the specified columns, and metadata preserved.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><a
  href="/docs/datasets/v3.6.0/en/package_reference/table_classes#datasets.table.Table"
>datasets.table.Table</a></p>
`}}),Un=new f({props:{name:"drop",anchor:"datasets.table.ConcatenationTable.drop",parameters:[{name:"columns",val:""},{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"datasets.table.ConcatenationTable.drop.columns",description:`<strong>columns</strong> (<code>List[str]</code>) &#x2014;
List of field names referencing existing columns.`,name:"columns"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L1706",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>New table without the columns.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>datasets.table.Table</code></p>
`,raiseDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<ul>
<li><code>KeyError</code> — : if any of the passed columns name are not existing.</li>
</ul>
`,raiseType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>KeyError</code></p>
`}}),Rn=new f({props:{name:"from_blocks",anchor:"datasets.table.ConcatenationTable.from_blocks",parameters:[{name:"blocks",val:": ~TableBlockContainer"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L1379"}}),Bn=new f({props:{name:"from_tables",anchor:"datasets.table.ConcatenationTable.from_tables",parameters:[{name:"tables",val:": list"},{name:"axis",val:": int = 0"}],parametersDescription:[{anchor:"datasets.table.ConcatenationTable.from_tables.tables",description:`<strong>tables</strong> (list of <code>Table</code> or list of <code>pyarrow.Table</code>) &#x2014;
List of tables.`,name:"tables"},{anchor:"datasets.table.ConcatenationTable.from_tables.axis",description:`<strong>axis</strong> (<code>{0, 1}</code>, defaults to <code>0</code>, meaning over rows) &#x2014;
Axis to concatenate over, where <code>0</code> means over rows (vertically) and <code>1</code> means over columns
(horizontally).</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						<p class="font-medium">Added in 1.6.0</p>
						
					</div>`,name:"axis"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L1393"}}),On=new td({props:{title:"Utils",local:"datasets.table.concat_tables",headingTag:"h2"}}),Wn=new f({props:{name:"datasets.table.concat_tables",anchor:"datasets.table.concat_tables",parameters:[{name:"tables",val:": list"},{name:"axis",val:": int = 0"}],parametersDescription:[{anchor:"datasets.table.concat_tables.tables",description:`<strong>tables</strong> (list of <code>Table</code>) &#x2014;
List of tables to be concatenated.`,name:"tables"},{anchor:"datasets.table.concat_tables.axis",description:`<strong>axis</strong> (<code>{0, 1}</code>, defaults to <code>0</code>, meaning over rows) &#x2014;
Axis to concatenate over, where <code>0</code> means over rows (vertically) and <code>1</code> means over columns
(horizontally).</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						<p class="font-medium">Added in 1.6.0</p>
						
					</div>`,name:"axis"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L1747",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>If the number of input tables is > 1, then the returned table is a <code>datasets.table.ConcatenationTable</code>.
Otherwise if there’s only one table, it is returned as is.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>datasets.table.Table</code></p>
`}}),Xn=new f({props:{name:"datasets.table.list_table_cache_files",anchor:"datasets.table.list_table_cache_files",parameters:[{name:"table",val:": Table"}],source:"https://github.com/huggingface/datasets/blob/3.6.0/src/datasets/table.py#L1770",returnDescription:`<script context="module">export const metadata = 'undefined';<\/script>


<p>A list of paths to the cache files loaded by the table.</p>
`,returnType:`<script context="module">export const metadata = 'undefined';<\/script>


<p><code>List[str]</code></p>
`}}),Gn=new jf({props:{source:"https://github.com/huggingface/datasets/blob/main/docs/source/package_reference/table_classes.mdx"}}),{c(){I=o("meta"),Et=a(),j=o("p"),L=a(),l(P.$$.fragment),D=a(),E=o("p"),E.innerHTML=Fu,od=a(),l(jt.$$.fragment),rd=a(),T=o("div"),l(Vt.$$.fragment),Kl=a(),Jn=o("p"),Jn.innerHTML=Au,Zl=a(),Yn=o("p"),Yn.innerHTML=Nu,Ql=a(),Kn=o("p"),Kn.textContent=qu,ec=a(),V=o("div"),l(Ft.$$.fragment),tc=a(),Zn=o("p"),Zn.textContent=Hu,ac=a(),Qn=o("p"),Qn.innerHTML=Su,nc=a(),ee=o("div"),l(At.$$.fragment),oc=a(),eo=o("p"),eo.textContent=zu,rc=a(),te=o("div"),l(Nt.$$.fragment),sc=a(),to=o("p"),to.innerHTML=Uu,dc=a(),ae=o("div"),l(qt.$$.fragment),lc=a(),ao=o("p"),ao.innerHTML=Ru,cc=a(),ne=o("div"),l(Ht.$$.fragment),ic=a(),no=o("p"),no.textContent=Bu,pc=a(),oo=o("div"),l(St.$$.fragment),mc=a(),oe=o("div"),l(zt.$$.fragment),uc=a(),ro=o("p"),ro.textContent=Ou,bc=a(),re=o("div"),l(Ut.$$.fragment),gc=a(),so=o("p"),so.textContent=Wu,fc=a(),se=o("div"),l(Rt.$$.fragment),hc=a(),lo=o("p"),lo.textContent=Xu,vc=a(),de=o("div"),l(Bt.$$.fragment),xc=a(),co=o("p"),co.textContent=Gu,yc=a(),le=o("div"),l(Ot.$$.fragment),$c=a(),io=o("p"),io.textContent=Ju,_c=a(),ce=o("div"),l(Wt.$$.fragment),Tc=a(),po=o("p"),po.textContent=Yu,wc=a(),F=o("div"),l(Xt.$$.fragment),Cc=a(),mo=o("p"),mo.textContent=Ku,Mc=a(),uo=o("p"),uo.textContent=Zu,Dc=a(),ie=o("div"),l(Gt.$$.fragment),Ic=a(),bo=o("p"),bo.textContent=Qu,kc=a(),pe=o("div"),l(Jt.$$.fragment),Lc=a(),go=o("p"),go.textContent=eb,sd=a(),l(Yt.$$.fragment),dd=a(),h=o("div"),l(Kt.$$.fragment),Pc=a(),fo=o("p"),fo.textContent=tb,Ec=a(),ho=o("p"),ho.textContent=ab,jc=a(),vo=o("p"),vo.innerHTML=nb,Vc=a(),xo=o("p"),xo.innerHTML=ob,Fc=a(),A=o("div"),l(Zt.$$.fragment),Ac=a(),yo=o("p"),yo.textContent=rb,Nc=a(),$o=o("p"),$o.innerHTML=sb,qc=a(),me=o("div"),l(Qt.$$.fragment),Hc=a(),_o=o("p"),_o.textContent=db,Sc=a(),ue=o("div"),l(ea.$$.fragment),zc=a(),To=o("p"),To.innerHTML=lb,Uc=a(),be=o("div"),l(ta.$$.fragment),Rc=a(),wo=o("p"),wo.innerHTML=cb,Bc=a(),ge=o("div"),l(aa.$$.fragment),Oc=a(),Co=o("p"),Co.textContent=ib,Wc=a(),Mo=o("div"),l(na.$$.fragment),Xc=a(),fe=o("div"),l(oa.$$.fragment),Gc=a(),Do=o("p"),Do.textContent=pb,Jc=a(),he=o("div"),l(ra.$$.fragment),Yc=a(),Io=o("p"),Io.textContent=mb,Kc=a(),ve=o("div"),l(sa.$$.fragment),Zc=a(),ko=o("p"),ko.textContent=ub,Qc=a(),xe=o("div"),l(da.$$.fragment),ei=a(),Lo=o("p"),Lo.textContent=bb,ti=a(),ye=o("div"),l(la.$$.fragment),ai=a(),Po=o("p"),Po.textContent=gb,ni=a(),$e=o("div"),l(ca.$$.fragment),oi=a(),Eo=o("p"),Eo.textContent=fb,ri=a(),N=o("div"),l(ia.$$.fragment),si=a(),jo=o("p"),jo.textContent=hb,di=a(),Vo=o("p"),Vo.textContent=vb,li=a(),_e=o("div"),l(pa.$$.fragment),ci=a(),Fo=o("p"),Fo.textContent=xb,ii=a(),Te=o("div"),l(ma.$$.fragment),pi=a(),Ao=o("p"),Ao.textContent=yb,mi=a(),we=o("div"),l(ua.$$.fragment),ui=a(),No=o("p"),No.textContent=$b,bi=a(),Ce=o("div"),l(ba.$$.fragment),gi=a(),qo=o("p"),qo.textContent=_b,fi=a(),Me=o("div"),l(ga.$$.fragment),hi=a(),Ho=o("p"),Ho.innerHTML=Tb,vi=a(),De=o("div"),l(fa.$$.fragment),xi=a(),So=o("p"),So.textContent=wb,yi=a(),q=o("div"),l(ha.$$.fragment),$i=a(),zo=o("p"),zo.textContent=Cb,_i=a(),Uo=o("p"),Uo.innerHTML=Mb,Ti=a(),Ie=o("div"),l(va.$$.fragment),wi=a(),Ro=o("p"),Ro.textContent=Db,Ci=a(),ke=o("div"),l(xa.$$.fragment),Mi=a(),Bo=o("p"),Bo.innerHTML=Ib,Di=a(),H=o("div"),l(ya.$$.fragment),Ii=a(),Oo=o("p"),Oo.textContent=kb,ki=a(),Wo=o("p"),Wo.textContent=Lb,Li=a(),Le=o("div"),l($a.$$.fragment),Pi=a(),Xo=o("p"),Xo.textContent=Pb,Ei=a(),Pe=o("div"),l(_a.$$.fragment),ji=a(),Go=o("p"),Go.textContent=Eb,Vi=a(),Ee=o("div"),l(Ta.$$.fragment),Fi=a(),Jo=o("p"),Jo.textContent=jb,Ai=a(),je=o("div"),l(wa.$$.fragment),Ni=a(),Yo=o("p"),Yo.textContent=Vb,qi=a(),S=o("div"),l(Ca.$$.fragment),Hi=a(),Ko=o("p"),Ko.textContent=Fb,Si=a(),Zo=o("p"),Zo.textContent=Ab,zi=a(),Ve=o("div"),l(Ma.$$.fragment),Ui=a(),Qo=o("p"),Qo.textContent=Nb,Ri=a(),er=o("div"),l(Da.$$.fragment),Bi=a(),tr=o("div"),l(Ia.$$.fragment),Oi=a(),k=o("div"),l(ka.$$.fragment),Wi=a(),ar=o("p"),ar.textContent=qb,Xi=a(),nr=o("p"),nr.innerHTML=Hb,Gi=a(),or=o("p"),or.innerHTML=Sb,Ji=a(),l(Fe.$$.fragment),Yi=a(),Ae=o("div"),l(La.$$.fragment),Ki=a(),rr=o("p"),rr.textContent=zb,Zi=a(),Ne=o("div"),l(Pa.$$.fragment),Qi=a(),sr=o("p"),sr.textContent=Ub,ep=a(),qe=o("div"),l(Ea.$$.fragment),tp=a(),dr=o("p"),dr.innerHTML=Rb,ld=a(),l(ja.$$.fragment),cd=a(),y=o("div"),l(Va.$$.fragment),ap=a(),lr=o("p"),lr.textContent=Bb,np=a(),cr=o("p"),cr.textContent=Ob,op=a(),ir=o("p"),ir.textContent=Wb,rp=a(),pr=o("p"),pr.innerHTML=Xb,sp=a(),mr=o("p"),mr.innerHTML=Gb,dp=a(),z=o("div"),l(Fa.$$.fragment),lp=a(),ur=o("p"),ur.textContent=Jb,cp=a(),br=o("p"),br.innerHTML=Yb,ip=a(),He=o("div"),l(Aa.$$.fragment),pp=a(),gr=o("p"),gr.textContent=Kb,mp=a(),Se=o("div"),l(Na.$$.fragment),up=a(),fr=o("p"),fr.innerHTML=Zb,bp=a(),ze=o("div"),l(qa.$$.fragment),gp=a(),hr=o("p"),hr.innerHTML=Qb,fp=a(),Ue=o("div"),l(Ha.$$.fragment),hp=a(),vr=o("p"),vr.textContent=eg,vp=a(),xr=o("div"),l(Sa.$$.fragment),xp=a(),Re=o("div"),l(za.$$.fragment),yp=a(),yr=o("p"),yr.textContent=tg,$p=a(),Be=o("div"),l(Ua.$$.fragment),_p=a(),$r=o("p"),$r.textContent=ag,Tp=a(),Oe=o("div"),l(Ra.$$.fragment),wp=a(),_r=o("p"),_r.textContent=ng,Cp=a(),We=o("div"),l(Ba.$$.fragment),Mp=a(),Tr=o("p"),Tr.textContent=og,Dp=a(),Xe=o("div"),l(Oa.$$.fragment),Ip=a(),wr=o("p"),wr.textContent=rg,kp=a(),Ge=o("div"),l(Wa.$$.fragment),Lp=a(),Cr=o("p"),Cr.textContent=sg,Pp=a(),U=o("div"),l(Xa.$$.fragment),Ep=a(),Mr=o("p"),Mr.textContent=dg,jp=a(),Dr=o("p"),Dr.textContent=lg,Vp=a(),Je=o("div"),l(Ga.$$.fragment),Fp=a(),Ir=o("p"),Ir.textContent=cg,Ap=a(),Ye=o("div"),l(Ja.$$.fragment),Np=a(),kr=o("p"),kr.textContent=ig,qp=a(),Ke=o("div"),l(Ya.$$.fragment),Hp=a(),Lr=o("p"),Lr.textContent=pg,Sp=a(),Ze=o("div"),l(Ka.$$.fragment),zp=a(),Pr=o("p"),Pr.textContent=mg,Up=a(),Qe=o("div"),l(Za.$$.fragment),Rp=a(),Er=o("p"),Er.innerHTML=ug,Bp=a(),et=o("div"),l(Qa.$$.fragment),Op=a(),jr=o("p"),jr.textContent=bg,Wp=a(),R=o("div"),l(en.$$.fragment),Xp=a(),Vr=o("p"),Vr.textContent=gg,Gp=a(),Fr=o("p"),Fr.textContent=fg,Jp=a(),tt=o("div"),l(tn.$$.fragment),Yp=a(),Ar=o("p"),Ar.textContent=hg,Kp=a(),at=o("div"),l(an.$$.fragment),Zp=a(),Nr=o("p"),Nr.textContent=vg,Qp=a(),B=o("div"),l(nn.$$.fragment),em=a(),qr=o("p"),qr.textContent=xg,tm=a(),Hr=o("p"),Hr.textContent=yg,am=a(),nt=o("div"),l(on.$$.fragment),nm=a(),Sr=o("p"),Sr.textContent=$g,om=a(),ot=o("div"),l(rn.$$.fragment),rm=a(),zr=o("p"),zr.textContent=_g,sm=a(),rt=o("div"),l(sn.$$.fragment),dm=a(),Ur=o("p"),Ur.textContent=Tg,lm=a(),st=o("div"),l(dn.$$.fragment),cm=a(),Rr=o("p"),Rr.textContent=wg,im=a(),O=o("div"),l(ln.$$.fragment),pm=a(),Br=o("p"),Br.textContent=Cg,mm=a(),Or=o("p"),Or.textContent=Mg,um=a(),dt=o("div"),l(cn.$$.fragment),bm=a(),Wr=o("p"),Wr.textContent=Dg,gm=a(),Xr=o("div"),l(pn.$$.fragment),id=a(),l(mn.$$.fragment),pd=a(),v=o("div"),l(un.$$.fragment),fm=a(),Gr=o("p"),Gr.textContent=Ig,hm=a(),Jr=o("p"),Jr.innerHTML=kg,vm=a(),Yr=o("ul"),Yr.innerHTML=Lg,xm=a(),Kr=o("p"),Kr.innerHTML=Pg,ym=a(),Zr=o("p"),Zr.innerHTML=Eg,$m=a(),Qr=o("p"),Qr.innerHTML=jg,_m=a(),W=o("div"),l(bn.$$.fragment),Tm=a(),es=o("p"),es.textContent=Vg,wm=a(),ts=o("p"),ts.innerHTML=Fg,Cm=a(),lt=o("div"),l(gn.$$.fragment),Mm=a(),as=o("p"),as.textContent=Ag,Dm=a(),ct=o("div"),l(fn.$$.fragment),Im=a(),ns=o("p"),ns.innerHTML=Ng,km=a(),it=o("div"),l(hn.$$.fragment),Lm=a(),os=o("p"),os.innerHTML=qg,Pm=a(),pt=o("div"),l(vn.$$.fragment),Em=a(),rs=o("p"),rs.textContent=Hg,jm=a(),ss=o("div"),l(xn.$$.fragment),Vm=a(),mt=o("div"),l(yn.$$.fragment),Fm=a(),ds=o("p"),ds.textContent=Sg,Am=a(),ut=o("div"),l($n.$$.fragment),Nm=a(),ls=o("p"),ls.textContent=zg,qm=a(),bt=o("div"),l(_n.$$.fragment),Hm=a(),cs=o("p"),cs.textContent=Ug,Sm=a(),gt=o("div"),l(Tn.$$.fragment),zm=a(),is=o("p"),is.textContent=Rg,Um=a(),ft=o("div"),l(wn.$$.fragment),Rm=a(),ps=o("p"),ps.textContent=Bg,Bm=a(),ht=o("div"),l(Cn.$$.fragment),Om=a(),ms=o("p"),ms.textContent=Og,Wm=a(),X=o("div"),l(Mn.$$.fragment),Xm=a(),us=o("p"),us.textContent=Wg,Gm=a(),bs=o("p"),bs.textContent=Xg,Jm=a(),vt=o("div"),l(Dn.$$.fragment),Ym=a(),gs=o("p"),gs.textContent=Gg,Km=a(),xt=o("div"),l(In.$$.fragment),Zm=a(),fs=o("p"),fs.textContent=Jg,Qm=a(),yt=o("div"),l(kn.$$.fragment),eu=a(),hs=o("p"),hs.textContent=Yg,tu=a(),$t=o("div"),l(Ln.$$.fragment),au=a(),vs=o("p"),vs.textContent=Kg,nu=a(),_t=o("div"),l(Pn.$$.fragment),ou=a(),xs=o("p"),xs.innerHTML=Zg,ru=a(),Tt=o("div"),l(En.$$.fragment),su=a(),ys=o("p"),ys.textContent=Qg,du=a(),G=o("div"),l(jn.$$.fragment),lu=a(),$s=o("p"),$s.textContent=ef,cu=a(),_s=o("p"),_s.innerHTML=tf,iu=a(),wt=o("div"),l(Vn.$$.fragment),pu=a(),Ts=o("p"),Ts.textContent=af,mu=a(),Ct=o("div"),l(Fn.$$.fragment),uu=a(),ws=o("p"),ws.innerHTML=nf,bu=a(),J=o("div"),l(An.$$.fragment),gu=a(),Cs=o("p"),Cs.textContent=of,fu=a(),Ms=o("p"),Ms.textContent=rf,hu=a(),Mt=o("div"),l(Nn.$$.fragment),vu=a(),Ds=o("p"),Ds.textContent=sf,xu=a(),Dt=o("div"),l(qn.$$.fragment),yu=a(),Is=o("p"),Is.textContent=df,$u=a(),It=o("div"),l(Hn.$$.fragment),_u=a(),ks=o("p"),ks.textContent=lf,Tu=a(),kt=o("div"),l(Sn.$$.fragment),wu=a(),Ls=o("p"),Ls.textContent=cf,Cu=a(),Y=o("div"),l(zn.$$.fragment),Mu=a(),Ps=o("p"),Ps.textContent=pf,Du=a(),Es=o("p"),Es.textContent=mf,Iu=a(),Lt=o("div"),l(Un.$$.fragment),ku=a(),js=o("p"),js.textContent=uf,Lu=a(),Vs=o("div"),l(Rn.$$.fragment),Pu=a(),Pt=o("div"),l(Bn.$$.fragment),Eu=a(),Fs=o("p"),Fs.innerHTML=bf,md=a(),l(On.$$.fragment),ud=a(),Z=o("div"),l(Wn.$$.fragment),ju=a(),As=o("p"),As.textContent=gf,bd=a(),Q=o("div"),l(Xn.$$.fragment),Vu=a(),Ns=o("p"),Ns.textContent=ff,gd=a(),l(Gn.$$.fragment),fd=a(),ad=o("p"),this.h()},l(t){const C=Lf("svelte-u9bgzb",document.head);I=r(C,"META",{name:!0,content:!0}),C.forEach(s),Et=n(t),j=r(t,"P",{}),b(j).forEach(s),L=n(t),c(P.$$.fragment,t),D=n(t),E=r(t,"P",{"data-svelte-h":!0}),d(E)!=="svelte-13arl12"&&(E.innerHTML=Fu),od=n(t),c(jt.$$.fragment,t),rd=n(t),T=r(t,"DIV",{class:!0});var w=b(T);c(Vt.$$.fragment,w),Kl=n(w),Jn=r(w,"P",{"data-svelte-h":!0}),d(Jn)!=="svelte-1f76q3k"&&(Jn.innerHTML=Au),Zl=n(w),Yn=r(w,"P",{"data-svelte-h":!0}),d(Yn)!=="svelte-qeobii"&&(Yn.innerHTML=Nu),Ql=n(w),Kn=r(w,"P",{"data-svelte-h":!0}),d(Kn)!=="svelte-1jrktog"&&(Kn.textContent=qu),ec=n(w),V=r(w,"DIV",{class:!0});var qs=b(V);c(Ft.$$.fragment,qs),tc=n(qs),Zn=r(qs,"P",{"data-svelte-h":!0}),d(Zn)!=="svelte-1y2x2zy"&&(Zn.textContent=Hu),ac=n(qs),Qn=r(qs,"P",{"data-svelte-h":!0}),d(Qn)!=="svelte-ckn0y6"&&(Qn.innerHTML=Su),qs.forEach(s),nc=n(w),ee=r(w,"DIV",{class:!0});var vd=b(ee);c(At.$$.fragment,vd),oc=n(vd),eo=r(vd,"P",{"data-svelte-h":!0}),d(eo)!=="svelte-62d01b"&&(eo.textContent=zu),vd.forEach(s),rc=n(w),te=r(w,"DIV",{class:!0});var xd=b(te);c(Nt.$$.fragment,xd),sc=n(xd),to=r(xd,"P",{"data-svelte-h":!0}),d(to)!=="svelte-qsqv8k"&&(to.innerHTML=Uu),xd.forEach(s),dc=n(w),ae=r(w,"DIV",{class:!0});var yd=b(ae);c(qt.$$.fragment,yd),lc=n(yd),ao=r(yd,"P",{"data-svelte-h":!0}),d(ao)!=="svelte-b5q6em"&&(ao.innerHTML=Ru),yd.forEach(s),cc=n(w),ne=r(w,"DIV",{class:!0});var $d=b(ne);c(Ht.$$.fragment,$d),ic=n($d),no=r($d,"P",{"data-svelte-h":!0}),d(no)!=="svelte-tnpwrs"&&(no.textContent=Bu),$d.forEach(s),pc=n(w),oo=r(w,"DIV",{class:!0});var hf=b(oo);c(St.$$.fragment,hf),hf.forEach(s),mc=n(w),oe=r(w,"DIV",{class:!0});var _d=b(oe);c(zt.$$.fragment,_d),uc=n(_d),ro=r(_d,"P",{"data-svelte-h":!0}),d(ro)!=="svelte-wuom4w"&&(ro.textContent=Ou),_d.forEach(s),bc=n(w),re=r(w,"DIV",{class:!0});var Td=b(re);c(Ut.$$.fragment,Td),gc=n(Td),so=r(Td,"P",{"data-svelte-h":!0}),d(so)!=="svelte-15kfhrd"&&(so.textContent=Wu),Td.forEach(s),fc=n(w),se=r(w,"DIV",{class:!0});var wd=b(se);c(Rt.$$.fragment,wd),hc=n(wd),lo=r(wd,"P",{"data-svelte-h":!0}),d(lo)!=="svelte-31bnu1"&&(lo.textContent=Xu),wd.forEach(s),vc=n(w),de=r(w,"DIV",{class:!0});var Cd=b(de);c(Bt.$$.fragment,Cd),xc=n(Cd),co=r(Cd,"P",{"data-svelte-h":!0}),d(co)!=="svelte-ip69yt"&&(co.textContent=Gu),Cd.forEach(s),yc=n(w),le=r(w,"DIV",{class:!0});var Md=b(le);c(Ot.$$.fragment,Md),$c=n(Md),io=r(Md,"P",{"data-svelte-h":!0}),d(io)!=="svelte-u5ak6c"&&(io.textContent=Ju),Md.forEach(s),_c=n(w),ce=r(w,"DIV",{class:!0});var Dd=b(ce);c(Wt.$$.fragment,Dd),Tc=n(Dd),po=r(Dd,"P",{"data-svelte-h":!0}),d(po)!=="svelte-1856ccq"&&(po.textContent=Yu),Dd.forEach(s),wc=n(w),F=r(w,"DIV",{class:!0});var Hs=b(F);c(Xt.$$.fragment,Hs),Cc=n(Hs),mo=r(Hs,"P",{"data-svelte-h":!0}),d(mo)!=="svelte-ld2730"&&(mo.textContent=Ku),Mc=n(Hs),uo=r(Hs,"P",{"data-svelte-h":!0}),d(uo)!=="svelte-106eibf"&&(uo.textContent=Zu),Hs.forEach(s),Dc=n(w),ie=r(w,"DIV",{class:!0});var Id=b(ie);c(Gt.$$.fragment,Id),Ic=n(Id),bo=r(Id,"P",{"data-svelte-h":!0}),d(bo)!=="svelte-17cnfg4"&&(bo.textContent=Qu),Id.forEach(s),kc=n(w),pe=r(w,"DIV",{class:!0});var kd=b(pe);c(Jt.$$.fragment,kd),Lc=n(kd),go=r(kd,"P",{"data-svelte-h":!0}),d(go)!=="svelte-66xmw"&&(go.textContent=eb),kd.forEach(s),w.forEach(s),sd=n(t),c(Yt.$$.fragment,t),dd=n(t),h=r(t,"DIV",{class:!0});var x=b(h);c(Kt.$$.fragment,x),Pc=n(x),fo=r(x,"P",{"data-svelte-h":!0}),d(fo)!=="svelte-1rcc8jp"&&(fo.textContent=tb),Ec=n(x),ho=r(x,"P",{"data-svelte-h":!0}),d(ho)!=="svelte-iyzaxg"&&(ho.textContent=ab),jc=n(x),vo=r(x,"P",{"data-svelte-h":!0}),d(vo)!=="svelte-lrdd2f"&&(vo.innerHTML=nb),Vc=n(x),xo=r(x,"P",{"data-svelte-h":!0}),d(xo)!=="svelte-irwml3"&&(xo.innerHTML=ob),Fc=n(x),A=r(x,"DIV",{class:!0});var Ss=b(A);c(Zt.$$.fragment,Ss),Ac=n(Ss),yo=r(Ss,"P",{"data-svelte-h":!0}),d(yo)!=="svelte-1y2x2zy"&&(yo.textContent=rb),Nc=n(Ss),$o=r(Ss,"P",{"data-svelte-h":!0}),d($o)!=="svelte-ckn0y6"&&($o.innerHTML=sb),Ss.forEach(s),qc=n(x),me=r(x,"DIV",{class:!0});var Ld=b(me);c(Qt.$$.fragment,Ld),Hc=n(Ld),_o=r(Ld,"P",{"data-svelte-h":!0}),d(_o)!=="svelte-62d01b"&&(_o.textContent=db),Ld.forEach(s),Sc=n(x),ue=r(x,"DIV",{class:!0});var Pd=b(ue);c(ea.$$.fragment,Pd),zc=n(Pd),To=r(Pd,"P",{"data-svelte-h":!0}),d(To)!=="svelte-qsqv8k"&&(To.innerHTML=lb),Pd.forEach(s),Uc=n(x),be=r(x,"DIV",{class:!0});var Ed=b(be);c(ta.$$.fragment,Ed),Rc=n(Ed),wo=r(Ed,"P",{"data-svelte-h":!0}),d(wo)!=="svelte-b5q6em"&&(wo.innerHTML=cb),Ed.forEach(s),Bc=n(x),ge=r(x,"DIV",{class:!0});var jd=b(ge);c(aa.$$.fragment,jd),Oc=n(jd),Co=r(jd,"P",{"data-svelte-h":!0}),d(Co)!=="svelte-tnpwrs"&&(Co.textContent=ib),jd.forEach(s),Wc=n(x),Mo=r(x,"DIV",{class:!0});var vf=b(Mo);c(na.$$.fragment,vf),vf.forEach(s),Xc=n(x),fe=r(x,"DIV",{class:!0});var Vd=b(fe);c(oa.$$.fragment,Vd),Gc=n(Vd),Do=r(Vd,"P",{"data-svelte-h":!0}),d(Do)!=="svelte-wuom4w"&&(Do.textContent=pb),Vd.forEach(s),Jc=n(x),he=r(x,"DIV",{class:!0});var Fd=b(he);c(ra.$$.fragment,Fd),Yc=n(Fd),Io=r(Fd,"P",{"data-svelte-h":!0}),d(Io)!=="svelte-15kfhrd"&&(Io.textContent=mb),Fd.forEach(s),Kc=n(x),ve=r(x,"DIV",{class:!0});var Ad=b(ve);c(sa.$$.fragment,Ad),Zc=n(Ad),ko=r(Ad,"P",{"data-svelte-h":!0}),d(ko)!=="svelte-31bnu1"&&(ko.textContent=ub),Ad.forEach(s),Qc=n(x),xe=r(x,"DIV",{class:!0});var Nd=b(xe);c(da.$$.fragment,Nd),ei=n(Nd),Lo=r(Nd,"P",{"data-svelte-h":!0}),d(Lo)!=="svelte-ip69yt"&&(Lo.textContent=bb),Nd.forEach(s),ti=n(x),ye=r(x,"DIV",{class:!0});var qd=b(ye);c(la.$$.fragment,qd),ai=n(qd),Po=r(qd,"P",{"data-svelte-h":!0}),d(Po)!=="svelte-u5ak6c"&&(Po.textContent=gb),qd.forEach(s),ni=n(x),$e=r(x,"DIV",{class:!0});var Hd=b($e);c(ca.$$.fragment,Hd),oi=n(Hd),Eo=r(Hd,"P",{"data-svelte-h":!0}),d(Eo)!=="svelte-1856ccq"&&(Eo.textContent=fb),Hd.forEach(s),ri=n(x),N=r(x,"DIV",{class:!0});var zs=b(N);c(ia.$$.fragment,zs),si=n(zs),jo=r(zs,"P",{"data-svelte-h":!0}),d(jo)!=="svelte-ld2730"&&(jo.textContent=hb),di=n(zs),Vo=r(zs,"P",{"data-svelte-h":!0}),d(Vo)!=="svelte-106eibf"&&(Vo.textContent=vb),zs.forEach(s),li=n(x),_e=r(x,"DIV",{class:!0});var Sd=b(_e);c(pa.$$.fragment,Sd),ci=n(Sd),Fo=r(Sd,"P",{"data-svelte-h":!0}),d(Fo)!=="svelte-17cnfg4"&&(Fo.textContent=xb),Sd.forEach(s),ii=n(x),Te=r(x,"DIV",{class:!0});var zd=b(Te);c(ma.$$.fragment,zd),pi=n(zd),Ao=r(zd,"P",{"data-svelte-h":!0}),d(Ao)!=="svelte-66xmw"&&(Ao.textContent=yb),zd.forEach(s),mi=n(x),we=r(x,"DIV",{class:!0});var Ud=b(we);c(ua.$$.fragment,Ud),ui=n(Ud),No=r(Ud,"P",{"data-svelte-h":!0}),d(No)!=="svelte-17uczb9"&&(No.textContent=$b),Ud.forEach(s),bi=n(x),Ce=r(x,"DIV",{class:!0});var Rd=b(Ce);c(ba.$$.fragment,Rd),gi=n(Rd),qo=r(Rd,"P",{"data-svelte-h":!0}),d(qo)!=="svelte-rywqeu"&&(qo.textContent=_b),Rd.forEach(s),fi=n(x),Me=r(x,"DIV",{class:!0});var Bd=b(Me);c(ga.$$.fragment,Bd),hi=n(Bd),Ho=r(Bd,"P",{"data-svelte-h":!0}),d(Ho)!=="svelte-1mw3qp9"&&(Ho.innerHTML=Tb),Bd.forEach(s),vi=n(x),De=r(x,"DIV",{class:!0});var Od=b(De);c(fa.$$.fragment,Od),xi=n(Od),So=r(Od,"P",{"data-svelte-h":!0}),d(So)!=="svelte-u1ndw3"&&(So.textContent=wb),Od.forEach(s),yi=n(x),q=r(x,"DIV",{class:!0});var Us=b(q);c(ha.$$.fragment,Us),$i=n(Us),zo=r(Us,"P",{"data-svelte-h":!0}),d(zo)!=="svelte-1k8bx9d"&&(zo.textContent=Cb),_i=n(Us),Uo=r(Us,"P",{"data-svelte-h":!0}),d(Uo)!=="svelte-1ns8yy"&&(Uo.innerHTML=Mb),Us.forEach(s),Ti=n(x),Ie=r(x,"DIV",{class:!0});var Wd=b(Ie);c(va.$$.fragment,Wd),wi=n(Wd),Ro=r(Wd,"P",{"data-svelte-h":!0}),d(Ro)!=="svelte-1ln9dp4"&&(Ro.textContent=Db),Wd.forEach(s),Ci=n(x),ke=r(x,"DIV",{class:!0});var Xd=b(ke);c(xa.$$.fragment,Xd),Mi=n(Xd),Bo=r(Xd,"P",{"data-svelte-h":!0}),d(Bo)!=="svelte-rkioww"&&(Bo.innerHTML=Ib),Xd.forEach(s),Di=n(x),H=r(x,"DIV",{class:!0});var Rs=b(H);c(ya.$$.fragment,Rs),Ii=n(Rs),Oo=r(Rs,"P",{"data-svelte-h":!0}),d(Oo)!=="svelte-1jj5n06"&&(Oo.textContent=kb),ki=n(Rs),Wo=r(Rs,"P",{"data-svelte-h":!0}),d(Wo)!=="svelte-jvel2s"&&(Wo.textContent=Lb),Rs.forEach(s),Li=n(x),Le=r(x,"DIV",{class:!0});var Gd=b(Le);c($a.$$.fragment,Gd),Pi=n(Gd),Xo=r(Gd,"P",{"data-svelte-h":!0}),d(Xo)!=="svelte-1fpfws6"&&(Xo.textContent=Pb),Gd.forEach(s),Ei=n(x),Pe=r(x,"DIV",{class:!0});var Jd=b(Pe);c(_a.$$.fragment,Jd),ji=n(Jd),Go=r(Jd,"P",{"data-svelte-h":!0}),d(Go)!=="svelte-15ir3l4"&&(Go.textContent=Eb),Jd.forEach(s),Vi=n(x),Ee=r(x,"DIV",{class:!0});var Yd=b(Ee);c(Ta.$$.fragment,Yd),Fi=n(Yd),Jo=r(Yd,"P",{"data-svelte-h":!0}),d(Jo)!=="svelte-1xg7aaz"&&(Jo.textContent=jb),Yd.forEach(s),Ai=n(x),je=r(x,"DIV",{class:!0});var Kd=b(je);c(wa.$$.fragment,Kd),Ni=n(Kd),Yo=r(Kd,"P",{"data-svelte-h":!0}),d(Yo)!=="svelte-1kp5kv5"&&(Yo.textContent=Vb),Kd.forEach(s),qi=n(x),S=r(x,"DIV",{class:!0});var Bs=b(S);c(Ca.$$.fragment,Bs),Hi=n(Bs),Ko=r(Bs,"P",{"data-svelte-h":!0}),d(Ko)!=="svelte-q6qfth"&&(Ko.textContent=Fb),Si=n(Bs),Zo=r(Bs,"P",{"data-svelte-h":!0}),d(Zo)!=="svelte-w4xlrs"&&(Zo.textContent=Ab),Bs.forEach(s),zi=n(x),Ve=r(x,"DIV",{class:!0});var Zd=b(Ve);c(Ma.$$.fragment,Zd),Ui=n(Zd),Qo=r(Zd,"P",{"data-svelte-h":!0}),d(Qo)!=="svelte-10o6ut2"&&(Qo.textContent=Nb),Zd.forEach(s),Ri=n(x),er=r(x,"DIV",{class:!0});var xf=b(er);c(Da.$$.fragment,xf),xf.forEach(s),Bi=n(x),tr=r(x,"DIV",{class:!0});var yf=b(tr);c(Ia.$$.fragment,yf),yf.forEach(s),Oi=n(x),k=r(x,"DIV",{class:!0});var K=b(k);c(ka.$$.fragment,K),Wi=n(K),ar=r(K,"P",{"data-svelte-h":!0}),d(ar)!=="svelte-1rhelso"&&(ar.textContent=qb),Xi=n(K),nr=r(K,"P",{"data-svelte-h":!0}),d(nr)!=="svelte-4ruhz1"&&(nr.innerHTML=Hb),Gi=n(K),or=r(K,"P",{"data-svelte-h":!0}),d(or)!=="svelte-1xw9iig"&&(or.innerHTML=Sb),Ji=n(K),c(Fe.$$.fragment,K),K.forEach(s),Yi=n(x),Ae=r(x,"DIV",{class:!0});var Qd=b(Ae);c(La.$$.fragment,Qd),Ki=n(Qd),rr=r(Qd,"P",{"data-svelte-h":!0}),d(rr)!=="svelte-hrf2b1"&&(rr.textContent=zb),Qd.forEach(s),Zi=n(x),Ne=r(x,"DIV",{class:!0});var el=b(Ne);c(Pa.$$.fragment,el),Qi=n(el),sr=r(el,"P",{"data-svelte-h":!0}),d(sr)!=="svelte-1k8fwqj"&&(sr.textContent=Ub),el.forEach(s),ep=n(x),qe=r(x,"DIV",{class:!0});var tl=b(qe);c(Ea.$$.fragment,tl),tp=n(tl),dr=r(tl,"P",{"data-svelte-h":!0}),d(dr)!=="svelte-1cm2vyj"&&(dr.innerHTML=Rb),tl.forEach(s),x.forEach(s),ld=n(t),c(ja.$$.fragment,t),cd=n(t),y=r(t,"DIV",{class:!0});var _=b(y);c(Va.$$.fragment,_),ap=n(_),lr=r(_,"P",{"data-svelte-h":!0}),d(lr)!=="svelte-2oq36h"&&(lr.textContent=Bb),np=n(_),cr=r(_,"P",{"data-svelte-h":!0}),d(cr)!=="svelte-1fzt9hi"&&(cr.textContent=Ob),op=n(_),ir=r(_,"P",{"data-svelte-h":!0}),d(ir)!=="svelte-wsxifu"&&(ir.textContent=Wb),rp=n(_),pr=r(_,"P",{"data-svelte-h":!0}),d(pr)!=="svelte-1973ehs"&&(pr.innerHTML=Xb),sp=n(_),mr=r(_,"P",{"data-svelte-h":!0}),d(mr)!=="svelte-irwml3"&&(mr.innerHTML=Gb),dp=n(_),z=r(_,"DIV",{class:!0});var Os=b(z);c(Fa.$$.fragment,Os),lp=n(Os),ur=r(Os,"P",{"data-svelte-h":!0}),d(ur)!=="svelte-1y2x2zy"&&(ur.textContent=Jb),cp=n(Os),br=r(Os,"P",{"data-svelte-h":!0}),d(br)!=="svelte-ckn0y6"&&(br.innerHTML=Yb),Os.forEach(s),ip=n(_),He=r(_,"DIV",{class:!0});var al=b(He);c(Aa.$$.fragment,al),pp=n(al),gr=r(al,"P",{"data-svelte-h":!0}),d(gr)!=="svelte-62d01b"&&(gr.textContent=Kb),al.forEach(s),mp=n(_),Se=r(_,"DIV",{class:!0});var nl=b(Se);c(Na.$$.fragment,nl),up=n(nl),fr=r(nl,"P",{"data-svelte-h":!0}),d(fr)!=="svelte-qsqv8k"&&(fr.innerHTML=Zb),nl.forEach(s),bp=n(_),ze=r(_,"DIV",{class:!0});var ol=b(ze);c(qa.$$.fragment,ol),gp=n(ol),hr=r(ol,"P",{"data-svelte-h":!0}),d(hr)!=="svelte-b5q6em"&&(hr.innerHTML=Qb),ol.forEach(s),fp=n(_),Ue=r(_,"DIV",{class:!0});var rl=b(Ue);c(Ha.$$.fragment,rl),hp=n(rl),vr=r(rl,"P",{"data-svelte-h":!0}),d(vr)!=="svelte-tnpwrs"&&(vr.textContent=eg),rl.forEach(s),vp=n(_),xr=r(_,"DIV",{class:!0});var $f=b(xr);c(Sa.$$.fragment,$f),$f.forEach(s),xp=n(_),Re=r(_,"DIV",{class:!0});var sl=b(Re);c(za.$$.fragment,sl),yp=n(sl),yr=r(sl,"P",{"data-svelte-h":!0}),d(yr)!=="svelte-wuom4w"&&(yr.textContent=tg),sl.forEach(s),$p=n(_),Be=r(_,"DIV",{class:!0});var dl=b(Be);c(Ua.$$.fragment,dl),_p=n(dl),$r=r(dl,"P",{"data-svelte-h":!0}),d($r)!=="svelte-15kfhrd"&&($r.textContent=ag),dl.forEach(s),Tp=n(_),Oe=r(_,"DIV",{class:!0});var ll=b(Oe);c(Ra.$$.fragment,ll),wp=n(ll),_r=r(ll,"P",{"data-svelte-h":!0}),d(_r)!=="svelte-31bnu1"&&(_r.textContent=ng),ll.forEach(s),Cp=n(_),We=r(_,"DIV",{class:!0});var cl=b(We);c(Ba.$$.fragment,cl),Mp=n(cl),Tr=r(cl,"P",{"data-svelte-h":!0}),d(Tr)!=="svelte-ip69yt"&&(Tr.textContent=og),cl.forEach(s),Dp=n(_),Xe=r(_,"DIV",{class:!0});var il=b(Xe);c(Oa.$$.fragment,il),Ip=n(il),wr=r(il,"P",{"data-svelte-h":!0}),d(wr)!=="svelte-u5ak6c"&&(wr.textContent=rg),il.forEach(s),kp=n(_),Ge=r(_,"DIV",{class:!0});var pl=b(Ge);c(Wa.$$.fragment,pl),Lp=n(pl),Cr=r(pl,"P",{"data-svelte-h":!0}),d(Cr)!=="svelte-1856ccq"&&(Cr.textContent=sg),pl.forEach(s),Pp=n(_),U=r(_,"DIV",{class:!0});var Ws=b(U);c(Xa.$$.fragment,Ws),Ep=n(Ws),Mr=r(Ws,"P",{"data-svelte-h":!0}),d(Mr)!=="svelte-ld2730"&&(Mr.textContent=dg),jp=n(Ws),Dr=r(Ws,"P",{"data-svelte-h":!0}),d(Dr)!=="svelte-106eibf"&&(Dr.textContent=lg),Ws.forEach(s),Vp=n(_),Je=r(_,"DIV",{class:!0});var ml=b(Je);c(Ga.$$.fragment,ml),Fp=n(ml),Ir=r(ml,"P",{"data-svelte-h":!0}),d(Ir)!=="svelte-17cnfg4"&&(Ir.textContent=cg),ml.forEach(s),Ap=n(_),Ye=r(_,"DIV",{class:!0});var ul=b(Ye);c(Ja.$$.fragment,ul),Np=n(ul),kr=r(ul,"P",{"data-svelte-h":!0}),d(kr)!=="svelte-66xmw"&&(kr.textContent=ig),ul.forEach(s),qp=n(_),Ke=r(_,"DIV",{class:!0});var bl=b(Ke);c(Ya.$$.fragment,bl),Hp=n(bl),Lr=r(bl,"P",{"data-svelte-h":!0}),d(Lr)!=="svelte-17uczb9"&&(Lr.textContent=pg),bl.forEach(s),Sp=n(_),Ze=r(_,"DIV",{class:!0});var gl=b(Ze);c(Ka.$$.fragment,gl),zp=n(gl),Pr=r(gl,"P",{"data-svelte-h":!0}),d(Pr)!=="svelte-rywqeu"&&(Pr.textContent=mg),gl.forEach(s),Up=n(_),Qe=r(_,"DIV",{class:!0});var fl=b(Qe);c(Za.$$.fragment,fl),Rp=n(fl),Er=r(fl,"P",{"data-svelte-h":!0}),d(Er)!=="svelte-1mw3qp9"&&(Er.innerHTML=ug),fl.forEach(s),Bp=n(_),et=r(_,"DIV",{class:!0});var hl=b(et);c(Qa.$$.fragment,hl),Op=n(hl),jr=r(hl,"P",{"data-svelte-h":!0}),d(jr)!=="svelte-u1ndw3"&&(jr.textContent=bg),hl.forEach(s),Wp=n(_),R=r(_,"DIV",{class:!0});var Xs=b(R);c(en.$$.fragment,Xs),Xp=n(Xs),Vr=r(Xs,"P",{"data-svelte-h":!0}),d(Vr)!=="svelte-1k8bx9d"&&(Vr.textContent=gg),Gp=n(Xs),Fr=r(Xs,"P",{"data-svelte-h":!0}),d(Fr)!=="svelte-a0nkdz"&&(Fr.textContent=fg),Xs.forEach(s),Jp=n(_),tt=r(_,"DIV",{class:!0});var vl=b(tt);c(tn.$$.fragment,vl),Yp=n(vl),Ar=r(vl,"P",{"data-svelte-h":!0}),d(Ar)!=="svelte-13m9bx6"&&(Ar.textContent=hg),vl.forEach(s),Kp=n(_),at=r(_,"DIV",{class:!0});var xl=b(at);c(an.$$.fragment,xl),Zp=n(xl),Nr=r(xl,"P",{"data-svelte-h":!0}),d(Nr)!=="svelte-uz2wpc"&&(Nr.textContent=vg),xl.forEach(s),Qp=n(_),B=r(_,"DIV",{class:!0});var Gs=b(B);c(nn.$$.fragment,Gs),em=n(Gs),qr=r(Gs,"P",{"data-svelte-h":!0}),d(qr)!=="svelte-1jj5n06"&&(qr.textContent=xg),tm=n(Gs),Hr=r(Gs,"P",{"data-svelte-h":!0}),d(Hr)!=="svelte-jvel2s"&&(Hr.textContent=yg),Gs.forEach(s),am=n(_),nt=r(_,"DIV",{class:!0});var yl=b(nt);c(on.$$.fragment,yl),nm=n(yl),Sr=r(yl,"P",{"data-svelte-h":!0}),d(Sr)!=="svelte-1fpfws6"&&(Sr.textContent=$g),yl.forEach(s),om=n(_),ot=r(_,"DIV",{class:!0});var $l=b(ot);c(rn.$$.fragment,$l),rm=n($l),zr=r($l,"P",{"data-svelte-h":!0}),d(zr)!=="svelte-15ir3l4"&&(zr.textContent=_g),$l.forEach(s),sm=n(_),rt=r(_,"DIV",{class:!0});var _l=b(rt);c(sn.$$.fragment,_l),dm=n(_l),Ur=r(_l,"P",{"data-svelte-h":!0}),d(Ur)!=="svelte-1xg7aaz"&&(Ur.textContent=Tg),_l.forEach(s),lm=n(_),st=r(_,"DIV",{class:!0});var Tl=b(st);c(dn.$$.fragment,Tl),cm=n(Tl),Rr=r(Tl,"P",{"data-svelte-h":!0}),d(Rr)!=="svelte-1kp5kv5"&&(Rr.textContent=wg),Tl.forEach(s),im=n(_),O=r(_,"DIV",{class:!0});var Js=b(O);c(ln.$$.fragment,Js),pm=n(Js),Br=r(Js,"P",{"data-svelte-h":!0}),d(Br)!=="svelte-q6qfth"&&(Br.textContent=Cg),mm=n(Js),Or=r(Js,"P",{"data-svelte-h":!0}),d(Or)!=="svelte-w4xlrs"&&(Or.textContent=Mg),Js.forEach(s),um=n(_),dt=r(_,"DIV",{class:!0});var wl=b(dt);c(cn.$$.fragment,wl),bm=n(wl),Wr=r(wl,"P",{"data-svelte-h":!0}),d(Wr)!=="svelte-10o6ut2"&&(Wr.textContent=Dg),wl.forEach(s),gm=n(_),Xr=r(_,"DIV",{class:!0});var _f=b(Xr);c(pn.$$.fragment,_f),_f.forEach(s),_.forEach(s),id=n(t),c(mn.$$.fragment,t),pd=n(t),v=r(t,"DIV",{class:!0});var $=b(v);c(un.$$.fragment,$),fm=n($),Gr=r($,"P",{"data-svelte-h":!0}),d(Gr)!=="svelte-1lginc7"&&(Gr.textContent=Ig),hm=n($),Jr=r($,"P",{"data-svelte-h":!0}),d(Jr)!=="svelte-1juetad"&&(Jr.innerHTML=kg),vm=n($),Yr=r($,"UL",{"data-svelte-h":!0}),d(Yr)!=="svelte-12thqiq"&&(Yr.innerHTML=Lg),xm=n($),Kr=r($,"P",{"data-svelte-h":!0}),d(Kr)!=="svelte-y7sotr"&&(Kr.innerHTML=Pg),ym=n($),Zr=r($,"P",{"data-svelte-h":!0}),d(Zr)!=="svelte-4lj9kj"&&(Zr.innerHTML=Eg),$m=n($),Qr=r($,"P",{"data-svelte-h":!0}),d(Qr)!=="svelte-s87cux"&&(Qr.innerHTML=jg),_m=n($),W=r($,"DIV",{class:!0});var Ys=b(W);c(bn.$$.fragment,Ys),Tm=n(Ys),es=r(Ys,"P",{"data-svelte-h":!0}),d(es)!=="svelte-1y2x2zy"&&(es.textContent=Vg),wm=n(Ys),ts=r(Ys,"P",{"data-svelte-h":!0}),d(ts)!=="svelte-ckn0y6"&&(ts.innerHTML=Fg),Ys.forEach(s),Cm=n($),lt=r($,"DIV",{class:!0});var Cl=b(lt);c(gn.$$.fragment,Cl),Mm=n(Cl),as=r(Cl,"P",{"data-svelte-h":!0}),d(as)!=="svelte-62d01b"&&(as.textContent=Ag),Cl.forEach(s),Dm=n($),ct=r($,"DIV",{class:!0});var Ml=b(ct);c(fn.$$.fragment,Ml),Im=n(Ml),ns=r(Ml,"P",{"data-svelte-h":!0}),d(ns)!=="svelte-qsqv8k"&&(ns.innerHTML=Ng),Ml.forEach(s),km=n($),it=r($,"DIV",{class:!0});var Dl=b(it);c(hn.$$.fragment,Dl),Lm=n(Dl),os=r(Dl,"P",{"data-svelte-h":!0}),d(os)!=="svelte-b5q6em"&&(os.innerHTML=qg),Dl.forEach(s),Pm=n($),pt=r($,"DIV",{class:!0});var Il=b(pt);c(vn.$$.fragment,Il),Em=n(Il),rs=r(Il,"P",{"data-svelte-h":!0}),d(rs)!=="svelte-tnpwrs"&&(rs.textContent=Hg),Il.forEach(s),jm=n($),ss=r($,"DIV",{class:!0});var Tf=b(ss);c(xn.$$.fragment,Tf),Tf.forEach(s),Vm=n($),mt=r($,"DIV",{class:!0});var kl=b(mt);c(yn.$$.fragment,kl),Fm=n(kl),ds=r(kl,"P",{"data-svelte-h":!0}),d(ds)!=="svelte-wuom4w"&&(ds.textContent=Sg),kl.forEach(s),Am=n($),ut=r($,"DIV",{class:!0});var Ll=b(ut);c($n.$$.fragment,Ll),Nm=n(Ll),ls=r(Ll,"P",{"data-svelte-h":!0}),d(ls)!=="svelte-15kfhrd"&&(ls.textContent=zg),Ll.forEach(s),qm=n($),bt=r($,"DIV",{class:!0});var Pl=b(bt);c(_n.$$.fragment,Pl),Hm=n(Pl),cs=r(Pl,"P",{"data-svelte-h":!0}),d(cs)!=="svelte-31bnu1"&&(cs.textContent=Ug),Pl.forEach(s),Sm=n($),gt=r($,"DIV",{class:!0});var El=b(gt);c(Tn.$$.fragment,El),zm=n(El),is=r(El,"P",{"data-svelte-h":!0}),d(is)!=="svelte-ip69yt"&&(is.textContent=Rg),El.forEach(s),Um=n($),ft=r($,"DIV",{class:!0});var jl=b(ft);c(wn.$$.fragment,jl),Rm=n(jl),ps=r(jl,"P",{"data-svelte-h":!0}),d(ps)!=="svelte-u5ak6c"&&(ps.textContent=Bg),jl.forEach(s),Bm=n($),ht=r($,"DIV",{class:!0});var Vl=b(ht);c(Cn.$$.fragment,Vl),Om=n(Vl),ms=r(Vl,"P",{"data-svelte-h":!0}),d(ms)!=="svelte-1856ccq"&&(ms.textContent=Og),Vl.forEach(s),Wm=n($),X=r($,"DIV",{class:!0});var Ks=b(X);c(Mn.$$.fragment,Ks),Xm=n(Ks),us=r(Ks,"P",{"data-svelte-h":!0}),d(us)!=="svelte-ld2730"&&(us.textContent=Wg),Gm=n(Ks),bs=r(Ks,"P",{"data-svelte-h":!0}),d(bs)!=="svelte-106eibf"&&(bs.textContent=Xg),Ks.forEach(s),Jm=n($),vt=r($,"DIV",{class:!0});var Fl=b(vt);c(Dn.$$.fragment,Fl),Ym=n(Fl),gs=r(Fl,"P",{"data-svelte-h":!0}),d(gs)!=="svelte-17cnfg4"&&(gs.textContent=Gg),Fl.forEach(s),Km=n($),xt=r($,"DIV",{class:!0});var Al=b(xt);c(In.$$.fragment,Al),Zm=n(Al),fs=r(Al,"P",{"data-svelte-h":!0}),d(fs)!=="svelte-66xmw"&&(fs.textContent=Jg),Al.forEach(s),Qm=n($),yt=r($,"DIV",{class:!0});var Nl=b(yt);c(kn.$$.fragment,Nl),eu=n(Nl),hs=r(Nl,"P",{"data-svelte-h":!0}),d(hs)!=="svelte-17uczb9"&&(hs.textContent=Yg),Nl.forEach(s),tu=n($),$t=r($,"DIV",{class:!0});var ql=b($t);c(Ln.$$.fragment,ql),au=n(ql),vs=r(ql,"P",{"data-svelte-h":!0}),d(vs)!=="svelte-rywqeu"&&(vs.textContent=Kg),ql.forEach(s),nu=n($),_t=r($,"DIV",{class:!0});var Hl=b(_t);c(Pn.$$.fragment,Hl),ou=n(Hl),xs=r(Hl,"P",{"data-svelte-h":!0}),d(xs)!=="svelte-1mw3qp9"&&(xs.innerHTML=Zg),Hl.forEach(s),ru=n($),Tt=r($,"DIV",{class:!0});var Sl=b(Tt);c(En.$$.fragment,Sl),su=n(Sl),ys=r(Sl,"P",{"data-svelte-h":!0}),d(ys)!=="svelte-u1ndw3"&&(ys.textContent=Qg),Sl.forEach(s),du=n($),G=r($,"DIV",{class:!0});var Zs=b(G);c(jn.$$.fragment,Zs),lu=n(Zs),$s=r(Zs,"P",{"data-svelte-h":!0}),d($s)!=="svelte-1k8bx9d"&&($s.textContent=ef),cu=n(Zs),_s=r(Zs,"P",{"data-svelte-h":!0}),d(_s)!=="svelte-1ns8yy"&&(_s.innerHTML=tf),Zs.forEach(s),iu=n($),wt=r($,"DIV",{class:!0});var zl=b(wt);c(Vn.$$.fragment,zl),pu=n(zl),Ts=r(zl,"P",{"data-svelte-h":!0}),d(Ts)!=="svelte-1ln9dp4"&&(Ts.textContent=af),zl.forEach(s),mu=n($),Ct=r($,"DIV",{class:!0});var Ul=b(Ct);c(Fn.$$.fragment,Ul),uu=n(Ul),ws=r(Ul,"P",{"data-svelte-h":!0}),d(ws)!=="svelte-rkioww"&&(ws.innerHTML=nf),Ul.forEach(s),bu=n($),J=r($,"DIV",{class:!0});var Qs=b(J);c(An.$$.fragment,Qs),gu=n(Qs),Cs=r(Qs,"P",{"data-svelte-h":!0}),d(Cs)!=="svelte-1jj5n06"&&(Cs.textContent=of),fu=n(Qs),Ms=r(Qs,"P",{"data-svelte-h":!0}),d(Ms)!=="svelte-jvel2s"&&(Ms.textContent=rf),Qs.forEach(s),hu=n($),Mt=r($,"DIV",{class:!0});var Rl=b(Mt);c(Nn.$$.fragment,Rl),vu=n(Rl),Ds=r(Rl,"P",{"data-svelte-h":!0}),d(Ds)!=="svelte-1fpfws6"&&(Ds.textContent=sf),Rl.forEach(s),xu=n($),Dt=r($,"DIV",{class:!0});var Bl=b(Dt);c(qn.$$.fragment,Bl),yu=n(Bl),Is=r(Bl,"P",{"data-svelte-h":!0}),d(Is)!=="svelte-15ir3l4"&&(Is.textContent=df),Bl.forEach(s),$u=n($),It=r($,"DIV",{class:!0});var Ol=b(It);c(Hn.$$.fragment,Ol),_u=n(Ol),ks=r(Ol,"P",{"data-svelte-h":!0}),d(ks)!=="svelte-1xg7aaz"&&(ks.textContent=lf),Ol.forEach(s),Tu=n($),kt=r($,"DIV",{class:!0});var Wl=b(kt);c(Sn.$$.fragment,Wl),wu=n(Wl),Ls=r(Wl,"P",{"data-svelte-h":!0}),d(Ls)!=="svelte-1kp5kv5"&&(Ls.textContent=cf),Wl.forEach(s),Cu=n($),Y=r($,"DIV",{class:!0});var ed=b(Y);c(zn.$$.fragment,ed),Mu=n(ed),Ps=r(ed,"P",{"data-svelte-h":!0}),d(Ps)!=="svelte-q6qfth"&&(Ps.textContent=pf),Du=n(ed),Es=r(ed,"P",{"data-svelte-h":!0}),d(Es)!=="svelte-w4xlrs"&&(Es.textContent=mf),ed.forEach(s),Iu=n($),Lt=r($,"DIV",{class:!0});var Xl=b(Lt);c(Un.$$.fragment,Xl),ku=n(Xl),js=r(Xl,"P",{"data-svelte-h":!0}),d(js)!=="svelte-10o6ut2"&&(js.textContent=uf),Xl.forEach(s),Lu=n($),Vs=r($,"DIV",{class:!0});var wf=b(Vs);c(Rn.$$.fragment,wf),wf.forEach(s),Pu=n($),Pt=r($,"DIV",{class:!0});var Gl=b(Pt);c(Bn.$$.fragment,Gl),Eu=n(Gl),Fs=r(Gl,"P",{"data-svelte-h":!0}),d(Fs)!=="svelte-jccnpb"&&(Fs.innerHTML=bf),Gl.forEach(s),$.forEach(s),md=n(t),c(On.$$.fragment,t),ud=n(t),Z=r(t,"DIV",{class:!0});var Jl=b(Z);c(Wn.$$.fragment,Jl),ju=n(Jl),As=r(Jl,"P",{"data-svelte-h":!0}),d(As)!=="svelte-163mglw"&&(As.textContent=gf),Jl.forEach(s),bd=n(t),Q=r(t,"DIV",{class:!0});var Yl=b(Q);c(Xn.$$.fragment,Yl),Vu=n(Yl),Ns=r(Yl,"P",{"data-svelte-h":!0}),d(Ns)!=="svelte-vo2ke4"&&(Ns.textContent=ff),Yl.forEach(s),gd=n(t),c(Gn.$$.fragment,t),fd=n(t),ad=r(t,"P",{}),b(ad).forEach(s),this.h()},h(){g(I,"name","hf:doc:metadata"),g(I,"content",Af),g(V,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(oo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(de,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(F,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(T,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(A,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Mo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(fe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(he,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g($e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(N,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(_e,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Te,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(we,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(De,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(H,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ee,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(S,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ve,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(er,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(tr,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(k,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(h,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(xr,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(U,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(R,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(B,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(rt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(O,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Xr,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(W,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ss,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(gt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ft,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(X,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(G,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(wt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(J,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(It,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Y,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Lt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Vs,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(v,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Z,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),g(Q,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(t,C){e(document.head,I),M(t,Et,C),M(t,j,C),M(t,L,C),i(P,t,C),M(t,D,C),M(t,E,C),M(t,od,C),i(jt,t,C),M(t,rd,C),M(t,T,C),i(Vt,T,null),e(T,Kl),e(T,Jn),e(T,Zl),e(T,Yn),e(T,Ql),e(T,Kn),e(T,ec),e(T,V),i(Ft,V,null),e(V,tc),e(V,Zn),e(V,ac),e(V,Qn),e(T,nc),e(T,ee),i(At,ee,null),e(ee,oc),e(ee,eo),e(T,rc),e(T,te),i(Nt,te,null),e(te,sc),e(te,to),e(T,dc),e(T,ae),i(qt,ae,null),e(ae,lc),e(ae,ao),e(T,cc),e(T,ne),i(Ht,ne,null),e(ne,ic),e(ne,no),e(T,pc),e(T,oo),i(St,oo,null),e(T,mc),e(T,oe),i(zt,oe,null),e(oe,uc),e(oe,ro),e(T,bc),e(T,re),i(Ut,re,null),e(re,gc),e(re,so),e(T,fc),e(T,se),i(Rt,se,null),e(se,hc),e(se,lo),e(T,vc),e(T,de),i(Bt,de,null),e(de,xc),e(de,co),e(T,yc),e(T,le),i(Ot,le,null),e(le,$c),e(le,io),e(T,_c),e(T,ce),i(Wt,ce,null),e(ce,Tc),e(ce,po),e(T,wc),e(T,F),i(Xt,F,null),e(F,Cc),e(F,mo),e(F,Mc),e(F,uo),e(T,Dc),e(T,ie),i(Gt,ie,null),e(ie,Ic),e(ie,bo),e(T,kc),e(T,pe),i(Jt,pe,null),e(pe,Lc),e(pe,go),M(t,sd,C),i(Yt,t,C),M(t,dd,C),M(t,h,C),i(Kt,h,null),e(h,Pc),e(h,fo),e(h,Ec),e(h,ho),e(h,jc),e(h,vo),e(h,Vc),e(h,xo),e(h,Fc),e(h,A),i(Zt,A,null),e(A,Ac),e(A,yo),e(A,Nc),e(A,$o),e(h,qc),e(h,me),i(Qt,me,null),e(me,Hc),e(me,_o),e(h,Sc),e(h,ue),i(ea,ue,null),e(ue,zc),e(ue,To),e(h,Uc),e(h,be),i(ta,be,null),e(be,Rc),e(be,wo),e(h,Bc),e(h,ge),i(aa,ge,null),e(ge,Oc),e(ge,Co),e(h,Wc),e(h,Mo),i(na,Mo,null),e(h,Xc),e(h,fe),i(oa,fe,null),e(fe,Gc),e(fe,Do),e(h,Jc),e(h,he),i(ra,he,null),e(he,Yc),e(he,Io),e(h,Kc),e(h,ve),i(sa,ve,null),e(ve,Zc),e(ve,ko),e(h,Qc),e(h,xe),i(da,xe,null),e(xe,ei),e(xe,Lo),e(h,ti),e(h,ye),i(la,ye,null),e(ye,ai),e(ye,Po),e(h,ni),e(h,$e),i(ca,$e,null),e($e,oi),e($e,Eo),e(h,ri),e(h,N),i(ia,N,null),e(N,si),e(N,jo),e(N,di),e(N,Vo),e(h,li),e(h,_e),i(pa,_e,null),e(_e,ci),e(_e,Fo),e(h,ii),e(h,Te),i(ma,Te,null),e(Te,pi),e(Te,Ao),e(h,mi),e(h,we),i(ua,we,null),e(we,ui),e(we,No),e(h,bi),e(h,Ce),i(ba,Ce,null),e(Ce,gi),e(Ce,qo),e(h,fi),e(h,Me),i(ga,Me,null),e(Me,hi),e(Me,Ho),e(h,vi),e(h,De),i(fa,De,null),e(De,xi),e(De,So),e(h,yi),e(h,q),i(ha,q,null),e(q,$i),e(q,zo),e(q,_i),e(q,Uo),e(h,Ti),e(h,Ie),i(va,Ie,null),e(Ie,wi),e(Ie,Ro),e(h,Ci),e(h,ke),i(xa,ke,null),e(ke,Mi),e(ke,Bo),e(h,Di),e(h,H),i(ya,H,null),e(H,Ii),e(H,Oo),e(H,ki),e(H,Wo),e(h,Li),e(h,Le),i($a,Le,null),e(Le,Pi),e(Le,Xo),e(h,Ei),e(h,Pe),i(_a,Pe,null),e(Pe,ji),e(Pe,Go),e(h,Vi),e(h,Ee),i(Ta,Ee,null),e(Ee,Fi),e(Ee,Jo),e(h,Ai),e(h,je),i(wa,je,null),e(je,Ni),e(je,Yo),e(h,qi),e(h,S),i(Ca,S,null),e(S,Hi),e(S,Ko),e(S,Si),e(S,Zo),e(h,zi),e(h,Ve),i(Ma,Ve,null),e(Ve,Ui),e(Ve,Qo),e(h,Ri),e(h,er),i(Da,er,null),e(h,Bi),e(h,tr),i(Ia,tr,null),e(h,Oi),e(h,k),i(ka,k,null),e(k,Wi),e(k,ar),e(k,Xi),e(k,nr),e(k,Gi),e(k,or),e(k,Ji),i(Fe,k,null),e(h,Yi),e(h,Ae),i(La,Ae,null),e(Ae,Ki),e(Ae,rr),e(h,Zi),e(h,Ne),i(Pa,Ne,null),e(Ne,Qi),e(Ne,sr),e(h,ep),e(h,qe),i(Ea,qe,null),e(qe,tp),e(qe,dr),M(t,ld,C),i(ja,t,C),M(t,cd,C),M(t,y,C),i(Va,y,null),e(y,ap),e(y,lr),e(y,np),e(y,cr),e(y,op),e(y,ir),e(y,rp),e(y,pr),e(y,sp),e(y,mr),e(y,dp),e(y,z),i(Fa,z,null),e(z,lp),e(z,ur),e(z,cp),e(z,br),e(y,ip),e(y,He),i(Aa,He,null),e(He,pp),e(He,gr),e(y,mp),e(y,Se),i(Na,Se,null),e(Se,up),e(Se,fr),e(y,bp),e(y,ze),i(qa,ze,null),e(ze,gp),e(ze,hr),e(y,fp),e(y,Ue),i(Ha,Ue,null),e(Ue,hp),e(Ue,vr),e(y,vp),e(y,xr),i(Sa,xr,null),e(y,xp),e(y,Re),i(za,Re,null),e(Re,yp),e(Re,yr),e(y,$p),e(y,Be),i(Ua,Be,null),e(Be,_p),e(Be,$r),e(y,Tp),e(y,Oe),i(Ra,Oe,null),e(Oe,wp),e(Oe,_r),e(y,Cp),e(y,We),i(Ba,We,null),e(We,Mp),e(We,Tr),e(y,Dp),e(y,Xe),i(Oa,Xe,null),e(Xe,Ip),e(Xe,wr),e(y,kp),e(y,Ge),i(Wa,Ge,null),e(Ge,Lp),e(Ge,Cr),e(y,Pp),e(y,U),i(Xa,U,null),e(U,Ep),e(U,Mr),e(U,jp),e(U,Dr),e(y,Vp),e(y,Je),i(Ga,Je,null),e(Je,Fp),e(Je,Ir),e(y,Ap),e(y,Ye),i(Ja,Ye,null),e(Ye,Np),e(Ye,kr),e(y,qp),e(y,Ke),i(Ya,Ke,null),e(Ke,Hp),e(Ke,Lr),e(y,Sp),e(y,Ze),i(Ka,Ze,null),e(Ze,zp),e(Ze,Pr),e(y,Up),e(y,Qe),i(Za,Qe,null),e(Qe,Rp),e(Qe,Er),e(y,Bp),e(y,et),i(Qa,et,null),e(et,Op),e(et,jr),e(y,Wp),e(y,R),i(en,R,null),e(R,Xp),e(R,Vr),e(R,Gp),e(R,Fr),e(y,Jp),e(y,tt),i(tn,tt,null),e(tt,Yp),e(tt,Ar),e(y,Kp),e(y,at),i(an,at,null),e(at,Zp),e(at,Nr),e(y,Qp),e(y,B),i(nn,B,null),e(B,em),e(B,qr),e(B,tm),e(B,Hr),e(y,am),e(y,nt),i(on,nt,null),e(nt,nm),e(nt,Sr),e(y,om),e(y,ot),i(rn,ot,null),e(ot,rm),e(ot,zr),e(y,sm),e(y,rt),i(sn,rt,null),e(rt,dm),e(rt,Ur),e(y,lm),e(y,st),i(dn,st,null),e(st,cm),e(st,Rr),e(y,im),e(y,O),i(ln,O,null),e(O,pm),e(O,Br),e(O,mm),e(O,Or),e(y,um),e(y,dt),i(cn,dt,null),e(dt,bm),e(dt,Wr),e(y,gm),e(y,Xr),i(pn,Xr,null),M(t,id,C),i(mn,t,C),M(t,pd,C),M(t,v,C),i(un,v,null),e(v,fm),e(v,Gr),e(v,hm),e(v,Jr),e(v,vm),e(v,Yr),e(v,xm),e(v,Kr),e(v,ym),e(v,Zr),e(v,$m),e(v,Qr),e(v,_m),e(v,W),i(bn,W,null),e(W,Tm),e(W,es),e(W,wm),e(W,ts),e(v,Cm),e(v,lt),i(gn,lt,null),e(lt,Mm),e(lt,as),e(v,Dm),e(v,ct),i(fn,ct,null),e(ct,Im),e(ct,ns),e(v,km),e(v,it),i(hn,it,null),e(it,Lm),e(it,os),e(v,Pm),e(v,pt),i(vn,pt,null),e(pt,Em),e(pt,rs),e(v,jm),e(v,ss),i(xn,ss,null),e(v,Vm),e(v,mt),i(yn,mt,null),e(mt,Fm),e(mt,ds),e(v,Am),e(v,ut),i($n,ut,null),e(ut,Nm),e(ut,ls),e(v,qm),e(v,bt),i(_n,bt,null),e(bt,Hm),e(bt,cs),e(v,Sm),e(v,gt),i(Tn,gt,null),e(gt,zm),e(gt,is),e(v,Um),e(v,ft),i(wn,ft,null),e(ft,Rm),e(ft,ps),e(v,Bm),e(v,ht),i(Cn,ht,null),e(ht,Om),e(ht,ms),e(v,Wm),e(v,X),i(Mn,X,null),e(X,Xm),e(X,us),e(X,Gm),e(X,bs),e(v,Jm),e(v,vt),i(Dn,vt,null),e(vt,Ym),e(vt,gs),e(v,Km),e(v,xt),i(In,xt,null),e(xt,Zm),e(xt,fs),e(v,Qm),e(v,yt),i(kn,yt,null),e(yt,eu),e(yt,hs),e(v,tu),e(v,$t),i(Ln,$t,null),e($t,au),e($t,vs),e(v,nu),e(v,_t),i(Pn,_t,null),e(_t,ou),e(_t,xs),e(v,ru),e(v,Tt),i(En,Tt,null),e(Tt,su),e(Tt,ys),e(v,du),e(v,G),i(jn,G,null),e(G,lu),e(G,$s),e(G,cu),e(G,_s),e(v,iu),e(v,wt),i(Vn,wt,null),e(wt,pu),e(wt,Ts),e(v,mu),e(v,Ct),i(Fn,Ct,null),e(Ct,uu),e(Ct,ws),e(v,bu),e(v,J),i(An,J,null),e(J,gu),e(J,Cs),e(J,fu),e(J,Ms),e(v,hu),e(v,Mt),i(Nn,Mt,null),e(Mt,vu),e(Mt,Ds),e(v,xu),e(v,Dt),i(qn,Dt,null),e(Dt,yu),e(Dt,Is),e(v,$u),e(v,It),i(Hn,It,null),e(It,_u),e(It,ks),e(v,Tu),e(v,kt),i(Sn,kt,null),e(kt,wu),e(kt,Ls),e(v,Cu),e(v,Y),i(zn,Y,null),e(Y,Mu),e(Y,Ps),e(Y,Du),e(Y,Es),e(v,Iu),e(v,Lt),i(Un,Lt,null),e(Lt,ku),e(Lt,js),e(v,Lu),e(v,Vs),i(Rn,Vs,null),e(v,Pu),e(v,Pt),i(Bn,Pt,null),e(Pt,Eu),e(Pt,Fs),M(t,md,C),i(On,t,C),M(t,ud,C),M(t,Z,C),i(Wn,Z,null),e(Z,ju),e(Z,As),M(t,bd,C),M(t,Q,C),i(Xn,Q,null),e(Q,Vu),e(Q,Ns),M(t,gd,C),i(Gn,t,C),M(t,fd,C),M(t,ad,C),hd=!0},p(t,[C]){const w={};C&2&&(w.$$scope={dirty:C,ctx:t}),Fe.$set(w)},i(t){hd||(p(P.$$.fragment,t),p(jt.$$.fragment,t),p(Vt.$$.fragment,t),p(Ft.$$.fragment,t),p(At.$$.fragment,t),p(Nt.$$.fragment,t),p(qt.$$.fragment,t),p(Ht.$$.fragment,t),p(St.$$.fragment,t),p(zt.$$.fragment,t),p(Ut.$$.fragment,t),p(Rt.$$.fragment,t),p(Bt.$$.fragment,t),p(Ot.$$.fragment,t),p(Wt.$$.fragment,t),p(Xt.$$.fragment,t),p(Gt.$$.fragment,t),p(Jt.$$.fragment,t),p(Yt.$$.fragment,t),p(Kt.$$.fragment,t),p(Zt.$$.fragment,t),p(Qt.$$.fragment,t),p(ea.$$.fragment,t),p(ta.$$.fragment,t),p(aa.$$.fragment,t),p(na.$$.fragment,t),p(oa.$$.fragment,t),p(ra.$$.fragment,t),p(sa.$$.fragment,t),p(da.$$.fragment,t),p(la.$$.fragment,t),p(ca.$$.fragment,t),p(ia.$$.fragment,t),p(pa.$$.fragment,t),p(ma.$$.fragment,t),p(ua.$$.fragment,t),p(ba.$$.fragment,t),p(ga.$$.fragment,t),p(fa.$$.fragment,t),p(ha.$$.fragment,t),p(va.$$.fragment,t),p(xa.$$.fragment,t),p(ya.$$.fragment,t),p($a.$$.fragment,t),p(_a.$$.fragment,t),p(Ta.$$.fragment,t),p(wa.$$.fragment,t),p(Ca.$$.fragment,t),p(Ma.$$.fragment,t),p(Da.$$.fragment,t),p(Ia.$$.fragment,t),p(ka.$$.fragment,t),p(Fe.$$.fragment,t),p(La.$$.fragment,t),p(Pa.$$.fragment,t),p(Ea.$$.fragment,t),p(ja.$$.fragment,t),p(Va.$$.fragment,t),p(Fa.$$.fragment,t),p(Aa.$$.fragment,t),p(Na.$$.fragment,t),p(qa.$$.fragment,t),p(Ha.$$.fragment,t),p(Sa.$$.fragment,t),p(za.$$.fragment,t),p(Ua.$$.fragment,t),p(Ra.$$.fragment,t),p(Ba.$$.fragment,t),p(Oa.$$.fragment,t),p(Wa.$$.fragment,t),p(Xa.$$.fragment,t),p(Ga.$$.fragment,t),p(Ja.$$.fragment,t),p(Ya.$$.fragment,t),p(Ka.$$.fragment,t),p(Za.$$.fragment,t),p(Qa.$$.fragment,t),p(en.$$.fragment,t),p(tn.$$.fragment,t),p(an.$$.fragment,t),p(nn.$$.fragment,t),p(on.$$.fragment,t),p(rn.$$.fragment,t),p(sn.$$.fragment,t),p(dn.$$.fragment,t),p(ln.$$.fragment,t),p(cn.$$.fragment,t),p(pn.$$.fragment,t),p(mn.$$.fragment,t),p(un.$$.fragment,t),p(bn.$$.fragment,t),p(gn.$$.fragment,t),p(fn.$$.fragment,t),p(hn.$$.fragment,t),p(vn.$$.fragment,t),p(xn.$$.fragment,t),p(yn.$$.fragment,t),p($n.$$.fragment,t),p(_n.$$.fragment,t),p(Tn.$$.fragment,t),p(wn.$$.fragment,t),p(Cn.$$.fragment,t),p(Mn.$$.fragment,t),p(Dn.$$.fragment,t),p(In.$$.fragment,t),p(kn.$$.fragment,t),p(Ln.$$.fragment,t),p(Pn.$$.fragment,t),p(En.$$.fragment,t),p(jn.$$.fragment,t),p(Vn.$$.fragment,t),p(Fn.$$.fragment,t),p(An.$$.fragment,t),p(Nn.$$.fragment,t),p(qn.$$.fragment,t),p(Hn.$$.fragment,t),p(Sn.$$.fragment,t),p(zn.$$.fragment,t),p(Un.$$.fragment,t),p(Rn.$$.fragment,t),p(Bn.$$.fragment,t),p(On.$$.fragment,t),p(Wn.$$.fragment,t),p(Xn.$$.fragment,t),p(Gn.$$.fragment,t),hd=!0)},o(t){m(P.$$.fragment,t),m(jt.$$.fragment,t),m(Vt.$$.fragment,t),m(Ft.$$.fragment,t),m(At.$$.fragment,t),m(Nt.$$.fragment,t),m(qt.$$.fragment,t),m(Ht.$$.fragment,t),m(St.$$.fragment,t),m(zt.$$.fragment,t),m(Ut.$$.fragment,t),m(Rt.$$.fragment,t),m(Bt.$$.fragment,t),m(Ot.$$.fragment,t),m(Wt.$$.fragment,t),m(Xt.$$.fragment,t),m(Gt.$$.fragment,t),m(Jt.$$.fragment,t),m(Yt.$$.fragment,t),m(Kt.$$.fragment,t),m(Zt.$$.fragment,t),m(Qt.$$.fragment,t),m(ea.$$.fragment,t),m(ta.$$.fragment,t),m(aa.$$.fragment,t),m(na.$$.fragment,t),m(oa.$$.fragment,t),m(ra.$$.fragment,t),m(sa.$$.fragment,t),m(da.$$.fragment,t),m(la.$$.fragment,t),m(ca.$$.fragment,t),m(ia.$$.fragment,t),m(pa.$$.fragment,t),m(ma.$$.fragment,t),m(ua.$$.fragment,t),m(ba.$$.fragment,t),m(ga.$$.fragment,t),m(fa.$$.fragment,t),m(ha.$$.fragment,t),m(va.$$.fragment,t),m(xa.$$.fragment,t),m(ya.$$.fragment,t),m($a.$$.fragment,t),m(_a.$$.fragment,t),m(Ta.$$.fragment,t),m(wa.$$.fragment,t),m(Ca.$$.fragment,t),m(Ma.$$.fragment,t),m(Da.$$.fragment,t),m(Ia.$$.fragment,t),m(ka.$$.fragment,t),m(Fe.$$.fragment,t),m(La.$$.fragment,t),m(Pa.$$.fragment,t),m(Ea.$$.fragment,t),m(ja.$$.fragment,t),m(Va.$$.fragment,t),m(Fa.$$.fragment,t),m(Aa.$$.fragment,t),m(Na.$$.fragment,t),m(qa.$$.fragment,t),m(Ha.$$.fragment,t),m(Sa.$$.fragment,t),m(za.$$.fragment,t),m(Ua.$$.fragment,t),m(Ra.$$.fragment,t),m(Ba.$$.fragment,t),m(Oa.$$.fragment,t),m(Wa.$$.fragment,t),m(Xa.$$.fragment,t),m(Ga.$$.fragment,t),m(Ja.$$.fragment,t),m(Ya.$$.fragment,t),m(Ka.$$.fragment,t),m(Za.$$.fragment,t),m(Qa.$$.fragment,t),m(en.$$.fragment,t),m(tn.$$.fragment,t),m(an.$$.fragment,t),m(nn.$$.fragment,t),m(on.$$.fragment,t),m(rn.$$.fragment,t),m(sn.$$.fragment,t),m(dn.$$.fragment,t),m(ln.$$.fragment,t),m(cn.$$.fragment,t),m(pn.$$.fragment,t),m(mn.$$.fragment,t),m(un.$$.fragment,t),m(bn.$$.fragment,t),m(gn.$$.fragment,t),m(fn.$$.fragment,t),m(hn.$$.fragment,t),m(vn.$$.fragment,t),m(xn.$$.fragment,t),m(yn.$$.fragment,t),m($n.$$.fragment,t),m(_n.$$.fragment,t),m(Tn.$$.fragment,t),m(wn.$$.fragment,t),m(Cn.$$.fragment,t),m(Mn.$$.fragment,t),m(Dn.$$.fragment,t),m(In.$$.fragment,t),m(kn.$$.fragment,t),m(Ln.$$.fragment,t),m(Pn.$$.fragment,t),m(En.$$.fragment,t),m(jn.$$.fragment,t),m(Vn.$$.fragment,t),m(Fn.$$.fragment,t),m(An.$$.fragment,t),m(Nn.$$.fragment,t),m(qn.$$.fragment,t),m(Hn.$$.fragment,t),m(Sn.$$.fragment,t),m(zn.$$.fragment,t),m(Un.$$.fragment,t),m(Rn.$$.fragment,t),m(Bn.$$.fragment,t),m(On.$$.fragment,t),m(Wn.$$.fragment,t),m(Xn.$$.fragment,t),m(Gn.$$.fragment,t),hd=!1},d(t){t&&(s(Et),s(j),s(L),s(D),s(E),s(od),s(rd),s(T),s(sd),s(dd),s(h),s(ld),s(cd),s(y),s(id),s(pd),s(v),s(md),s(ud),s(Z),s(bd),s(Q),s(gd),s(fd),s(ad)),s(I),u(P,t),u(jt,t),u(Vt),u(Ft),u(At),u(Nt),u(qt),u(Ht),u(St),u(zt),u(Ut),u(Rt),u(Bt),u(Ot),u(Wt),u(Xt),u(Gt),u(Jt),u(Yt,t),u(Kt),u(Zt),u(Qt),u(ea),u(ta),u(aa),u(na),u(oa),u(ra),u(sa),u(da),u(la),u(ca),u(ia),u(pa),u(ma),u(ua),u(ba),u(ga),u(fa),u(ha),u(va),u(xa),u(ya),u($a),u(_a),u(Ta),u(wa),u(Ca),u(Ma),u(Da),u(Ia),u(ka),u(Fe),u(La),u(Pa),u(Ea),u(ja,t),u(Va),u(Fa),u(Aa),u(Na),u(qa),u(Ha),u(Sa),u(za),u(Ua),u(Ra),u(Ba),u(Oa),u(Wa),u(Xa),u(Ga),u(Ja),u(Ya),u(Ka),u(Za),u(Qa),u(en),u(tn),u(an),u(nn),u(on),u(rn),u(sn),u(dn),u(ln),u(cn),u(pn),u(mn,t),u(un),u(bn),u(gn),u(fn),u(hn),u(vn),u(xn),u(yn),u($n),u(_n),u(Tn),u(wn),u(Cn),u(Mn),u(Dn),u(In),u(kn),u(Ln),u(Pn),u(En),u(jn),u(Vn),u(Fn),u(An),u(Nn),u(qn),u(Hn),u(Sn),u(zn),u(Un),u(Rn),u(Bn),u(On,t),u(Wn),u(Xn),u(Gn,t)}}}const Af='{"title":"Table Classes","local":"table-classes","sections":[{"title":"Table","local":"datasets.table.Table","sections":[],"depth":2},{"title":"InMemoryTable","local":"datasets.table.InMemoryTable","sections":[],"depth":2},{"title":"MemoryMappedTable","local":"datasets.table.MemoryMappedTable","sections":[],"depth":2},{"title":"ConcatenationTable","local":"datasets.table.ConcatenationTable","sections":[],"depth":2},{"title":"Utils","local":"datasets.table.concat_tables","sections":[],"depth":2}],"depth":1}';function Nf(nd){return Mf(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Bf extends If{constructor(I){super(),kf(this,I,Nf,Ff,Cf,{})}}export{Bf as component};
