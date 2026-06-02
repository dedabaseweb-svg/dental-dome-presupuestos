const DATA = {
  "coronas": [
    {"id":"zr_mono_std_tallado","nombre":"Corona monolítica Standard · Zirconio · Tallado","precio":80,"unidad":"unidad","protocolo":"corona_tallado","notas":["Color guía VITA","Sin estratificación cerámica","Modelos impresos aparte si procede"]},
    {"id":"zr_mono_std_implante","nombre":"Corona monolítica Standard · Zirconio · Implante","precio":90,"unidad":"unidad","protocolo":"implante_unitario","notas":["Requiere Ti-Base y tornillo","Modelos, encía y aditamentos aparte"]},
    {"id":"zr_mono_personalizada","nombre":"Corona monolítica Premium · Zirconio personalizado","precio":100,"unidad":"unidad","protocolo":"corona_tallado","notas":["Caracterización personalizada","Indicado para mayor requerimiento estético"]},
    {"id":"zr_estratificada_ant_implante","nombre":"Corona estratificada · Zirconio · Anterior sobre implante","precio":150,"unidad":"unidad","protocolo":"implante_unitario"},
    {"id":"zr_estratificada_post_implante","nombre":"Corona estratificada · Zirconio · Posterior sobre implante","precio":130,"unidad":"unidad","protocolo":"implante_unitario"},
    {"id":"disilicato_estrat_ant","nombre":"Corona disilicato estratificada · Anterior","precio":150,"unidad":"unidad","protocolo":"adhesiva_estetica"},
    {"id":"disilicato_estrat_post","nombre":"Corona disilicato estratificada · Posterior","precio":130,"unidad":"unidad","protocolo":"adhesiva_estetica"},
    {"id":"metal_ceramica_tallado_ant_std","nombre":"Corona Cr-Co metal-cerámica Standard · Anterior · Tallado","precio":120,"unidad":"unidad","protocolo":"corona_tallado"},
    {"id":"metal_ceramica_tallado_post_std","nombre":"Corona Cr-Co metal-cerámica Standard · Posterior · Tallado","precio":100,"unidad":"unidad","protocolo":"corona_tallado"},
    {"id":"metal_ceramica_implante_ant","nombre":"Corona Cr-Co metal-cerámica · Anterior sobre implante","precio":170,"unidad":"unidad","protocolo":"implante_unitario"},
    {"id":"metal_ceramica_implante_post","nombre":"Corona Cr-Co metal-cerámica · Posterior sobre implante","precio":150,"unidad":"unidad","protocolo":"implante_unitario"},
    {"id":"pendiente_disilicato_mono_std","nombre":"Corona monolítica Standard · Disilicato de litio","precio":null,"unidad":"unidad","protocolo":"adhesiva_estetica","notas":["Precio pendiente de confirmar en tarifa"]},
    {"id":"pendiente_metal_premium_ant","nombre":"Corona Cr-Co metal-cerámica Premium · Anterior","precio":null,"unidad":"unidad","protocolo":"corona_tallado","notas":["Precio pendiente de confirmar"]},
    {"id":"pendiente_metal_premium_post","nombre":"Corona Cr-Co metal-cerámica Premium · Posterior","precio":null,"unidad":"unidad","protocolo":"corona_tallado","notas":["Precio pendiente de confirmar"]}
  ],
  "adhesiva":[
    {"id":"carilla_feldespatica","nombre":"Carilla cerámica feldespática","precio":180,"unidad":"unidad","protocolo":"adhesiva_estetica"},
    {"id":"carilla_disilicato_maquillada","nombre":"Carilla disilicato monolítica maquillada","precio":130,"unidad":"unidad","protocolo":"adhesiva_estetica"},
    {"id":"carilla_disilicato_estratificada","nombre":"Carilla disilicato estratificada","precio":150,"unidad":"unidad","protocolo":"adhesiva_estetica"},
    {"id":"inlay_onlay_tabletop_disilicato","nombre":"Inlay / Onlay / Table Top · Disilicato maquillado","precio":130,"unidad":"unidad","protocolo":"adhesiva_estetica"},
    {"id":"onlay_feldespatica","nombre":"Onlay / Inlay / Table Top · Cerámica feldespática","precio":null,"unidad":"unidad","protocolo":"adhesiva_estetica","notas":["Precio pendiente de confirmar"]}
  ],
  "provisionales":[
    {"id":"pmma_monocapa_tallado","nombre":"PMMA fresado monocapa · prueba estética · tallado/póntico","precio":12,"unidad":"unidad","protocolo":"provisional"},
    {"id":"pmma_monocapa_implante","nombre":"PMMA fresado monocapa · prueba estética · implante/interface","precio":17,"unidad":"unidad","protocolo":"provisional"},
    {"id":"pmma_multicapa_tallado","nombre":"PMMA fresado multicapa · larga duración · tallado/póntico","precio":30,"unidad":"unidad","protocolo":"provisional"},
    {"id":"pmma_multicapa_implante","nombre":"PMMA fresado multicapa · larga duración · implante/interface","precio":45,"unidad":"unidad","protocolo":"provisional"},
    {"id":"test_impreso_3d","nombre":"Test impreso 3D monocapa · prueba estética","precio":null,"unidad":"unidad","protocolo":"provisional","notas":["Solo para prueba estética. Precio pendiente de confirmar."]}
  ],
  "rehabilitaciones":[
    {"id":"rehab_metal_ceramica_premium","nombre":"Rehabilitación completa Premium · Metal-cerámica","precio":3000,"unidad":"arcada","protocolo":"rehabilitacion_completa","incluye":["Modelos","FRI","Prueba pasividad escayola","Prueba estética"]},
    {"id":"rehab_zirconio_cutback_premium","nombre":"Rehabilitación completa Premium · Zirconio cut-back / recubierta","precio":2500,"unidad":"arcada","protocolo":"rehabilitacion_completa","incluye":["Modelos","FRI","Prueba pasividad escayola","Prueba estética"]},
    {"id":"rehab_zirconio_monolitica_maquillada","nombre":"Rehabilitación completa · Zirconio monolítica maquillada","precio":2000,"unidad":"arcada","protocolo":"rehabilitacion_completa"}
  ],
  "auxiliares":[
    {"id":"fri_fresada","nombre":"Férula FRI fresada","precio":10,"unidad":"implante","protocolo":"implantes_multiple"},
    {"id":"encia_impresa","nombre":"Encía impresa","precio":5,"unidad":"tramo","protocolo":"implantes_multiple"},
    {"id":"modelo_impreso","nombre":"Modelo impreso completo/hemiarcada","precio":20,"unidad":"modelo","protocolo":"modelo"},
    {"id":"prueba_pasividad_aluminio","nombre":"Prueba pasividad aluminio","precio":200,"unidad":"caso","protocolo":"implantes_multiple"},
    {"id":"prueba_pasividad_escayola","nombre":"Prueba pasividad escayola","precio":50,"unidad":"caso","protocolo":"implantes_multiple"},
    {"id":"pilar_titanio_personalizado","nombre":"Pilar titanio personalizado","precio":95,"unidad":"unidad","protocolo":"implante_unitario"},
    {"id":"pilar_zirconio_personalizado","nombre":"Pilar zirconio personalizado","precio":95,"unidad":"unidad","protocolo":"implante_unitario"},
    {"id":"ferula_descarga_fresada","nombre":"Férula fresada transparente","precio":80,"unidad":"unidad","protocolo":"ferula"},
    {"id":"guia_galucci","nombre":"Guía quirúrgica tipo Galucci · PMMA","precio":45,"unidad":"implante","protocolo":"guia_quirurgica"},
    {"id":"waxup_digital","nombre":"Wax-up digital","precio":10,"unidad":"pieza","protocolo":"mockup"},
    {"id":"diseno_modelo_3d","nombre":"Diseño modelo 3D","precio":5,"unidad":"caso","protocolo":"mockup"},
    {"id":"llave_mockup","nombre":"Llave mock-up","precio":25,"unidad":"llave","protocolo":"mockup"},
    {"id":"llave_silicona_transparente","nombre":"Llave silicona transparente","precio":25,"unidad":"llave","protocolo":"mockup"}
  ]
};

const PROTOCOLS = {
  corona_tallado: {
    titulo:"Corona sobre diente tallado",
    puntos:[
      "Indicar sector anterior/posterior y nivel de exigencia estética.",
      "Enviar color guía VITA y fotografías si hay compromiso estético.",
      "En trabajos BOPT: provisionalización, perfil de emergencia y registros adecuados.",
      "Consultar planificación y fecha con laboratorio antes de citar al paciente."
    ]
  },
  implante_unitario: {
    titulo:"Corona sobre implante unitario",
    puntos:[
      "Indicar marca de implante, plataforma, conexión y altura gingival deseada.",
      "En flujo digital, enviar marca y referencia exacta del scan body.",
      "Unidad: scan body antirrotatorio.",
      "Las coronas monolíticas requieren Ti-Base y tornillo. Las atornilladas directas serán metal-cerámica.",
      "Si hay emergencia crítica vestibular, valorar pilar personalizado y corona sobre pilar."
    ]
  },
  implantes_multiple: {
    titulo:"Implantes múltiples",
    puntos:[
      "Indicar marca, plataforma, conexión, altura gingival y referencias de scan bodies.",
      "Puentes o múltiples unidades: scan bodies rotatorios.",
      "Definir si la clínica aporta aditamentos o si se presupuestan vía IPD / proveedor.",
      "Consultar fecha con el laboratorio antes de programar pruebas clínicas."
    ]
  },
  rehabilitacion_completa: {
    titulo:"Rehabilitación completa",
    puntos:[
      "Primera fase: registros completos, fotografías, color, línea de sonrisa, mordida y planificación.",
      "Prueba de pasividad y rodetes atornillados según el caso.",
      "Prueba estética antes de la fase final.",
      "En Premium metal-cerámica o zirconio, modelos, FRI, pasividad en escayola y prueba estética quedan incluidos.",
      "En Standard monolítica se calculan unidades + modelos + encía + FRI + pasividad + prueba estética + aditamentos si procede."
    ]
  },
  adhesiva_estetica: {
    titulo:"Adhesiva / estética",
    puntos:[
      "Enviar fotografías clínicas de calidad y modelos pretratamiento o escaneado intraoral.",
      "Valorar material según espesor, color del sustrato y requerimiento estético.",
      "Carillas feldespáticas y disilicato estratificado requieren estudio estético previo.",
      "En casos complejos, realizar wax-up y mock-up antes de definitivo."
    ]
  },
  provisional: {
    titulo:"Provisional / prueba estética",
    puntos:[
      "PMMA monocapa: prueba estética o validación inicial.",
      "PMMA multicapa: provisional de larga duración.",
      "Test impreso 3D: solo prueba estética, no larga duración."
    ]
  },
  mockup: {
    titulo:"Mock-up",
    puntos:[
      "Calcular wax-up digital por pieza.",
      "El diseño de modelo 3D se cobra una vez por caso/modelo.",
      "Añadir modelo impreso y llave: mock-up o silicona transparente para inyección de composite."
    ]
  },
  guia_quirurgica: {
    titulo:"Guía quirúrgica tipo Galucci",
    puntos:[
      "Se calcula por implante planificado.",
      "Material PMMA.",
      "Confirmar planificación clínica antes de fabricación."
    ]
  },
  ferula: {
    titulo:"Férula fresada transparente",
    puntos:["Férula fresada transparente. Precio cerrado. Sin protocolo adicional específico."]
  },
  modelo: {
    titulo:"Modelos impresos",
    puntos:[
      "Hemiarcada: tramo de zona a rehabilitar y adyacentes.",
      "Modelo completo: implantes, tallados múltiples o rehabilitación.",
      "Encía impresa por tramo cuando corresponda."
    ]
  }
};

let currentFlow = "corona";
let quote = [];
let protocolsInQuote = new Set();

const eur = n => Number(n || 0).toLocaleString("es-ES",{style:"currency",currency:"EUR"});
const $ = id => document.getElementById(id);
$("date").textContent = new Date().toLocaleDateString("es-ES");

function allProducts(){
  return [...DATA.coronas,...DATA.adhesiva,...DATA.provisionales,...DATA.rehabilitaciones,...DATA.auxiliares];
}
function findProduct(id){return allProducts().find(p=>p.id===id)}
function options(list, filterFn=()=>true){
  return list.filter(filterFn).map(p=>`<option value="${p.id}">${p.nombre} ${p.precio==null?"· precio manual":`· ${p.precio} €`}</option>`).join("");
}
function qty(label="Cantidad", value=1){
  return `<label>${label}<input type="number" id="qty" min="1" step="1" value="${value}"></label>`;
}
function manualBlock(){
  return `<div id="manualWrap" style="display:none"><label>Precio manual / coste proveedor<input id="manualPrice" type="number" min="0" step="0.01" placeholder="Introducir importe"></label></div>`;
}

function renderForm(){
  let html="";
  if(currentFlow==="corona"){
    html = `
      <div class="subgrid">
        <label>Soporte
          <select id="support"><option value="tallado">Diente tallado</option><option value="implante">Implante</option></select>
        </label>
        <label>Sector
          <select id="sector"><option value="anterior">Anterior</option><option value="posterior">Posterior</option></select>
        </label>
      </div>
      <div class="subgrid">
        <label>Requerimiento estético
          <select id="esthetic"><option>No alto</option><option>Alto</option></select>
        </label>
        <label>Flujo
          <select id="workFlow"><option>Digital</option><option>Analógico</option></select>
        </label>
      </div>
      <label>Producto
        <select id="product"></select>
      </label>
      ${qty("Unidades",1)}
      <div id="implantFields"></div>
      ${manualBlock()}
      <div class="info-card" id="smartInfo"></div>`;
  } else if(currentFlow==="puente"){
    html = `
      <div class="info-card"><strong>Regla Dental Dome:</strong> el puente se calcula por número de coronas. Un puente de 3 = 3 unidades.</div>
      <div class="subgrid">
        <label>Soporte
          <select id="support"><option value="tallado">Diente tallado</option><option value="implante">Implante</option></select>
        </label>
        <label>Número de elementos del puente
          <input id="qty" type="number" min="2" step="1" value="3">
        </label>
      </div>
      <label>Producto base
        <select id="product"></select>
      </label>
      <div id="implantFields"></div>
      ${manualBlock()}
      <div class="info-card" id="smartInfo"></div>`;
  } else if(currentFlow==="rehabilitacion"){
    html = `
      <label>Tipo de rehabilitación
        <select id="rehabType">
          <option value="premium_mc">Premium · Metal-cerámica · precio cerrado</option>
          <option value="premium_zr">Premium · Zirconio cut-back / recubierta · precio cerrado</option>
          <option value="standard">Standard · Monolítica por unidades</option>
        </select>
      </label>
      <div id="rehabForm"></div>`;
  } else if(currentFlow==="adhesiva"){
    html = `
      <label>Trabajo adhesivo
        <select id="product">${options(DATA.adhesiva)}</select>
      </label>
      ${qty("Unidades",1)}
      ${manualBlock()}
      <div class="info-card">Enviar fotografías clínicas, modelos pretratamiento o escaneado intraoral si existe alta exigencia estética.</div>`;
  } else if(currentFlow==="provisional"){
    html = `
      <label>Tipo de provisional / prueba
        <select id="product">${options(DATA.provisionales)}</select>
      </label>
      ${qty("Unidades",1)}
      ${manualBlock()}
      <div class="info-card">PMMA monocapa: prueba estética. PMMA multicapa: provisional de larga duración. Test impreso 3D: solo prueba estética.</div>`;
  } else if(currentFlow==="mockup"){
    html = `
      <div class="info-card"><strong>Mock-up:</strong> wax-up por pieza + diseño modelo 3D por caso + modelo impreso + llave según orden.</div>
      <div class="subgrid">
        ${qty("Unidades wax-up",6)}
        <label>Número de modelos impresos<input type="number" id="modelos" min="0" value="1"></label>
      </div>
      <div class="subgrid">
        <label>Llaves mock-up<input type="number" id="llaveMock" min="0" value="1"></label>
        <label>Llaves silicona transparente<input type="number" id="llaveTrans" min="0" value="0"></label>
      </div>`;
  } else if(currentFlow==="ferula"){
    html = `<label>Producto<select id="product"><option value="ferula_descarga_fresada">Férula fresada transparente · 80 €</option></select></label>${qty("Cantidad",1)}`;
  } else if(currentFlow==="guia"){
    html = `<label>Producto<select id="product"><option value="guia_galucci">Guía quirúrgica tipo Galucci · PMMA · 45 €/implante</option></select></label>${qty("Número de implantes",1)}`;
  } else if(currentFlow==="auxiliar"){
    html = `<label>Auxiliar / modelo<select id="product">${options(DATA.auxiliares)}</select></label>${qty("Cantidad",1)}${manualBlock()}`;
  }
  $("dynamicForm").innerHTML = html;
  attachFormEvents();
  updateSmartForm();
}
function implantExtra(){
  return `<div class="subgrid">
    <label>Marca implante<input id="implantBrand" placeholder="Marca"></label>
    <label>Sistema / plataforma<input id="implantSystem" placeholder="Sistema / conexión"></label>
    <label>Scan body<input id="scanbody" placeholder="Marca y referencia exacta"></label>
    <label>Tipo scan body<select id="scanType"><option>Antirrotatorio (unidad)</option><option>Rotatorio (puente/múltiple)</option></select></label>
  </div>
  <label>Aditamentos
    <select id="aditamentos">
      <option>Los aporta la clínica</option>
      <option>IPD compatible según coste vigente</option>
      <option>Originales facturados directamente a clínica</option>
      <option>Originales comprados por laboratorio + gestión/transporte</option>
    </select>
  </label>
  <label>¿Requiere pilar personalizado?
    <select id="pilar"><option value="no">No</option><option value="pilar_titanio_personalizado">Pilar titanio personalizado · 95 €</option><option value="pilar_zirconio_personalizado">Pilar zirconio personalizado · 95 €</option></select>
  </label>`;
}
function attachFormEvents(){
  document.querySelectorAll("#dynamicForm select,#dynamicForm input").forEach(el=>{
    el.addEventListener("change", updateSmartForm);
    el.addEventListener("input", updateSmartForm);
  });
}
function updateSmartForm(){
  if(["corona","puente"].includes(currentFlow)){
    const support = $("support")?.value || "tallado";
    if($("implantFields")) $("implantFields").innerHTML = support==="implante" ? implantExtra() : "";
    let productList = DATA.coronas;
    if(support==="implante"){
      productList = productList.filter(p=>p.nombre.toLowerCase().includes("implante") || p.id.includes("mono_std_implante") || p.id.includes("pendiente"));
    }else{
      productList = productList.filter(p=>p.nombre.toLowerCase().includes("tallado") || p.id.includes("disilicato") || p.id.includes("zr_mono_personalizada") || p.id.includes("pendiente_metal"));
    }
    const old = $("product")?.value;
    if($("product")){
      $("product").innerHTML = options(productList);
      if(productList.some(p=>p.id===old)) $("product").value = old;
    }
    const p = findProduct($("product")?.value);
    if($("manualWrap")) $("manualWrap").style.display = p && p.precio==null ? "block" : "none";
    if($("smartInfo")){
      $("smartInfo").innerHTML = support==="implante" ?
      "<strong>Implantes:</strong> indicar marca, sistema y scan body. Monolíticas: Ti-Base + tornillo. Atornillada directa: metal-cerámica." :
      "<strong>Tallado:</strong> no requiere scan body ni aditamentos. En alto requerimiento estético, adjuntar fotografías y modelos pretratamiento.";
    }
  }
  if(["adhesiva","provisional","auxiliar"].includes(currentFlow)){
    const p = findProduct($("product")?.value);
    if($("manualWrap")) $("manualWrap").style.display = p && p.precio==null ? "block" : "none";
  }
  if(currentFlow==="rehabilitacion") renderRehabSubform();
}
function renderRehabSubform(){
  const type = $("rehabType")?.value;
  const el = $("rehabForm");
  if(!el) return;
  if(type==="standard"){
    el.innerHTML = `
      <div class="info-card"><strong>Standard:</strong> se calcula como arcada de coronas monolíticas Standard + auxiliares + aditamentos si procede.</div>
      <div class="subgrid">
        <label>Unidades monolíticas<input type="number" id="stdUnits" min="1" value="12"></label>
        <label>Número de implantes<input type="number" id="implantCount" min="0" value="6"></label>
      </div>
      <div class="subgrid">
        <label>Modelos impresos<input type="number" id="modelCount" min="0" value="2"></label>
        <label>Tramos encía impresa<input type="number" id="gingivaCount" min="0" value="1"></label>
      </div>
      <label>Prueba pasividad
        <select id="passivity"><option value="prueba_pasividad_escayola">Escayola · 50 €</option><option value="prueba_pasividad_aluminio">Aluminio · 200 €</option><option value="none">No añadir</option></select>
      </label>
      <label>Aditamentos
        <select id="aditamentos">
          <option>Los aporta la clínica</option>
          <option>IPD compatible según coste vigente</option>
          <option>Originales facturados directamente a clínica</option>
          <option>Originales comprados por laboratorio + gestión/transporte</option>
        </select>
      </label>`;
  } else {
    const product = type==="premium_mc" ? findProduct("rehab_metal_ceramica_premium") : findProduct("rehab_zirconio_cutback_premium");
    el.innerHTML = `<div class="info-card"><strong>Precio cerrado:</strong> ${product.nombre}<br>Incluye: ${(product.incluye||[]).join(", ")}. No añadir estos conceptos por separado para evitar duplicados.</div>${qty("Arcadas",1)}`;
  }
  attachFormEvents();
}
function addQuoteLine(product, quantity=1, priceOverride=null, note=""){
  const price = priceOverride!==null ? Number(priceOverride) : Number(product.precio || 0);
  quote.push({
    id: product.id+"_"+Date.now()+"_"+Math.random().toString(16).slice(2),
    productId: product.id,
    nombre: product.nombre,
    qty: Number(quantity||1),
    price,
    total: Number(quantity||1)*price,
    protocolo: product.protocolo,
    note
  });
  if(product.protocolo) protocolsInQuote.add(product.protocolo);
}
function addCurrent(){
  if(currentFlow==="mockup"){
    addQuoteLine(findProduct("waxup_digital"), $("qty").value);
    addQuoteLine(findProduct("diseno_modelo_3d"), 1);
    if(Number($("modelos").value)>0) addQuoteLine(findProduct("modelo_impreso"), $("modelos").value);
    if(Number($("llaveMock").value)>0) addQuoteLine(findProduct("llave_mockup"), $("llaveMock").value);
    if(Number($("llaveTrans").value)>0) addQuoteLine(findProduct("llave_silicona_transparente"), $("llaveTrans").value);
    protocolsInQuote.add("mockup");
  } else if(currentFlow==="rehabilitacion"){
    const type = $("rehabType").value;
    if(type==="premium_mc") addQuoteLine(findProduct("rehab_metal_ceramica_premium"), $("qty")?.value || 1);
    if(type==="premium_zr") addQuoteLine(findProduct("rehab_zirconio_cutback_premium"), $("qty")?.value || 1);
    if(type==="standard"){
      addQuoteLine(findProduct("zr_mono_std_implante"), $("stdUnits").value, 90, "Rehabilitación Standard por unidades");
      addQuoteLine(findProduct("modelo_impreso"), $("modelCount").value);
      addQuoteLine(findProduct("encia_impresa"), $("gingivaCount").value);
      addQuoteLine(findProduct("pmma_monocapa_implante"), $("stdUnits").value);
      addQuoteLine(findProduct("fri_fresada"), $("implantCount").value);
      if($("passivity").value!=="none") addQuoteLine(findProduct($("passivity").value), 1);
      protocolsInQuote.add("rehabilitacion_completa");
      protocolsInQuote.add("implantes_multiple");
    }
  } else {
    const p = findProduct($("product").value);
    const price = p.precio==null ? Number($("manualPrice")?.value || 0) : null;
    addQuoteLine(p, $("qty").value, price);
    const pilarId = $("pilar")?.value;
    if(pilarId && pilarId!=="no") addQuoteLine(findProduct(pilarId), 1);
    if(currentFlow==="puente") protocolsInQuote.add("implantes_multiple");
  }
  updateQuote();
}
function updateQuote(){
  $("quoteMeta").innerHTML = `<span>Clínica: ${$("clinica").value || "—"}</span><span>Doctor/a: ${$("doctor").value || "—"}</span><span>Paciente: ${$("paciente").value || "—"}</span>`;
  const tbody = $("quoteLines");
  tbody.innerHTML = quote.map(l=>`<tr>
    <td>${l.nombre}${l.note?`<br><small>${l.note}</small>`:""}</td>
    <td class="num">${l.qty}</td>
    <td class="num">${eur(l.price)}</td>
    <td class="num">${eur(l.total)}</td>
    <td><button class="remove" onclick="removeLine('${l.id}')">×</button></td>
  </tr>`).join("") || `<tr><td colspan="5">Sin conceptos todavía.</td></tr>`;
  $("total").textContent = eur(quote.reduce((s,l)=>s+l.total,0));
  renderWarnings();
  renderProtocols();
}
function removeLine(id){
  quote = quote.filter(l=>l.id!==id);
  protocolsInQuote = new Set(quote.map(l=>l.protocolo).filter(Boolean));
  updateQuote();
}
function renderWarnings(){
  const warnings = [
    "Consultar siempre la fecha con el laboratorio antes de citar al paciente.",
    "En trabajos digitales sobre implantes: indicar marca y referencia exacta del scan body.",
    "Unidad: scan body antirrotatorio. Puente o múltiples unidades: scan body rotatorio."
  ];
  const hasImplant = [...protocolsInQuote].some(x=>x.includes("implante")) || quote.some(l=>/implante|Ti-Base|FRI|pasividad/i.test(l.nombre));
  const highEsthetic = quote.some(l=>/feldespática|estratificada|cut-back|Premium/i.test(l.nombre));
  const out = [];
  if(hasImplant) out.push(warnings[1], warnings[2], "Aditamentos: se recomienda que la clínica los aporte para reducir costes.");
  if(highEsthetic) out.push("Alto requerimiento estético: enviar fotografías, modelos pretratamiento y toda la información del paciente.");
  out.push(warnings[0]);
  $("warnings").innerHTML = [...new Set(out)].map(w=>`<div class="warning">${w}</div>`).join("");
}
function renderProtocols(){
  if(protocolsInQuote.size===0){ $("protocolOutput").innerHTML="Selecciona un trabajo para generar protocolo."; return; }
  $("protocolOutput").innerHTML = [...protocolsInQuote].map(key=>{
    const p=PROTOCOLS[key]; if(!p) return "";
    return `<div><strong>${p.titulo}</strong><ul>${p.puntos.map(x=>`<li>${x}</li>`).join("")}</ul></div>`;
  }).join("");
}
function renderLibraries(){
  $("protocolLibrary").innerHTML = Object.values(PROTOCOLS).map(p=>`<div class="protocol-block"><h3>${p.titulo}</h3><ul>${p.puntos.map(x=>`<li>${x}</li>`).join("")}</ul></div>`).join("");
  $("priceLibrary").innerHTML = allProducts().map(p=>`<div class="price-card"><strong>${p.precio==null?"Manual / confirmar":eur(p.precio)}</strong><span>${p.nombre}</span><span>${p.unidad||"unidad"}</span></div>`).join("");
}
document.querySelectorAll(".work-card").forEach(card=>{
  card.addEventListener("click",()=>{
    document.querySelectorAll(".work-card").forEach(c=>c.classList.remove("selected"));
    card.classList.add("selected");
    currentFlow=card.dataset.flow;
    renderForm();
  });
});
document.querySelectorAll(".nav-item").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelectorAll(".nav-item").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");
    document.querySelectorAll(".view").forEach(v=>v.classList.remove("active"));
    $("view-"+btn.dataset.view).classList.add("active");
  });
});
["clinica","doctor","paciente"].forEach(id=>$(id).addEventListener("input",updateQuote));
$("addLine").addEventListener("click",addCurrent);
$("clearQuote").addEventListener("click",()=>{quote=[];protocolsInQuote.clear();updateQuote();});
$("resetForm").addEventListener("click",renderForm);
$("printPdf").addEventListener("click",()=>window.print());
$("copyWhatsApp").addEventListener("click",()=>{
  const lines = quote.map(l=>`- ${l.nombre} x${l.qty}: ${eur(l.total)}`).join("\n");
  const protocols = [...protocolsInQuote].map(k=>PROTOCOLS[k]?.titulo).filter(Boolean).join(", ");
  const text = `PRESUPUESTO DENTAL DOME\nClínica: ${$("clinica").value||"-"}\nDoctor/a: ${$("doctor").value||"-"}\nPaciente: ${$("paciente").value||"-"}\n\n${lines}\n\nTOTAL: ${$("total").textContent}\n\nProtocolos: ${protocols}\n\nObservación: consultar siempre la fecha con el laboratorio antes de citar al paciente.`;
  navigator.clipboard.writeText(text).then(()=>alert("Resumen copiado para WhatsApp."));
});
renderForm(); updateQuote(); renderLibraries();
