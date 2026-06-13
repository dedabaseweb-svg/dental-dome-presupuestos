const DATA = {
  coronas: [
    {id:"zr_mono_std_tallado",nombre:"Corona monolítica Standard · Zirconio · Tallado",precio:80,unidad:"unidad",protocolo:"corona_tallado",notas:["Color guía VITA","Sin estratificación cerámica"]},
    {id:"zr_mono_std_implante",nombre:"Corona monolítica Standard · Zirconio · Implante",precio:90,unidad:"unidad",protocolo:"implante_unitario"},
    {id:"zr_mono_personalizada",nombre:"Corona monolítica personalizada · Zirconio",precio:130,unidad:"unidad",protocolo:"corona_tallado"},
    {id:"zr_estratificada_ant_implante",nombre:"Corona estratificada · Zirconio · Anterior sobre implante",precio:150,unidad:"unidad",protocolo:"implante_unitario"},
    {id:"zr_estratificada_post_implante",nombre:"Corona estratificada · Zirconio · Posterior sobre implante",precio:130,unidad:"unidad",protocolo:"implante_unitario"},
    {id:"zr_estratificada_tallado_ant",nombre:"Corona estratificada sobre tallado · Zirconio · Anterior",precio:150,unidad:"unidad",protocolo:"corona_tallado"},
    {id:"zr_estratificada_tallado_post",nombre:"Corona estratificada sobre tallado · Zirconio · Posterior",precio:120,unidad:"unidad",protocolo:"corona_tallado"},
    {id:"disilicato_mono_std",nombre:"Corona disilicato de litio maquillada Standard",precio:100,unidad:"unidad",protocolo:"adhesiva_estetica"},
    {id:"disilicato_mono_personalizada",nombre:"Corona disilicato de litio maquillada personalizada",precio:130,unidad:"unidad",protocolo:"adhesiva_estetica"},
    {id:"disilicato_estrat_ant",nombre:"Corona disilicato estratificada · Anterior",precio:150,unidad:"unidad",protocolo:"adhesiva_estetica"},
    {id:"disilicato_estrat_post",nombre:"Corona disilicato estratificada · Posterior",precio:130,unidad:"unidad",protocolo:"adhesiva_estetica"},
    {id:"metal_ceramica_tallado_ant_std",nombre:"Corona Cr-Co metal-cerámica sobre tallado · Anterior",precio:120,unidad:"unidad",protocolo:"corona_tallado"},
    {id:"metal_ceramica_tallado_post_std",nombre:"Corona Cr-Co metal-cerámica sobre tallado · Posterior",precio:100,unidad:"unidad",protocolo:"corona_tallado"},
    {id:"metal_ceramica_implante_ant",nombre:"Corona Cr-Co metal-cerámica S/I · Anterior",precio:170,unidad:"unidad",protocolo:"implante_unitario"},
    {id:"metal_ceramica_implante_post",nombre:"Corona Cr-Co metal-cerámica S/I · Posterior",precio:150,unidad:"unidad",protocolo:"implante_unitario"}
  ],

  adhesiva: [
    {id:"carilla_feldespatica",nombre:"Carilla cerámica feldespática",precio:200,unidad:"unidad",protocolo:"adhesiva_estetica"},
    {id:"carilla_disilicato_maquillada",nombre:"Carilla e.max maquillada",precio:130,unidad:"unidad",protocolo:"adhesiva_estetica"},
    {id:"carilla_disilicato_estratificada",nombre:"Carilla e.max estratificada",precio:170,unidad:"unidad",protocolo:"adhesiva_estetica"},
    {id:"carilla_ips_empress",nombre:"Carilla IPS Empress maquillada",precio:150,unidad:"unidad",protocolo:"adhesiva_estetica"},
    {id:"inlay_onlay_tabletop_disilicato",nombre:"Inlay / Onlay / Table Top · Disilicato",precio:130,unidad:"unidad",protocolo:"adhesiva_estetica"},
    {id:"onlay_composite_fresado",nombre:"Onlay composite fresado",precio:100,unidad:"unidad",protocolo:"adhesiva_estetica"},
    {id:"maryland_emax",nombre:"Maryland e.max",precio:160,unidad:"unidad",protocolo:"adhesiva_estetica"},
    {id:"maryland_metal_ceramica",nombre:"Maryland metal-cerámica",precio:160,unidad:"unidad",protocolo:"adhesiva_estetica"}
  ],

  provisionales: [
    {id:"pmma_monocapa_implante",nombre:"PMMA monocapa fresado sobre implante",precio:17,unidad:"unidad",protocolo:"provisional"},
    {id:"pmma_multicapa_tallado",nombre:"PMMA multicapa sobre tallado / póntico",precio:30,unidad:"unidad",protocolo:"provisional"},
    {id:"pmma_multicapa_implante",nombre:"PMMA multicapa sobre implante",precio:45,unidad:"unidad",protocolo:"provisional"},
    {id:"test_impreso_3d",nombre:"Test impreso 3D",precio:6,unidad:"pieza",protocolo:"provisional"}
  ],

  rehabilitaciones: [
    {id:"rehab_metal_ceramica_premium",nombre:"Rehabilitación completa Premium · Metal-cerámica",precio:3000,unidad:"arcada",protocolo:"rehabilitacion_completa",incluye:["Modelos","FRI","Prueba pasividad","Prueba estética"]},
    {id:"rehab_zirconio_cutback_premium",nombre:"Rehabilitación completa Premium · Zirconio cut-back",precio:2500,unidad:"arcada",protocolo:"rehabilitacion_completa",incluye:["Modelos","FRI","Prueba pasividad","Prueba estética"]},
    {id:"rehab_zirconio_monolitica_maquillada",nombre:"Rehabilitación zirconio monolítica maquillada",precio:2000,unidad:"arcada",protocolo:"rehabilitacion_completa"}
  ],

  auxiliares: [
    {id:"modelo_impreso",nombre:"Modelo impreso",precio:20,unidad:"modelo",protocolo:"modelo"},
    {id:"hemiarcada_impresa",nombre:"Hemiarcada impresa",precio:12,unidad:"modelo",protocolo:"modelo"},
    {id:"modelo_impreso_implantes",nombre:"Modelo impreso implantes",precio:30,unidad:"modelo",protocolo:"modelo"},
    {id:"encia_impresa",nombre:"Encía impresa",precio:5,unidad:"tramo",protocolo:"implantes_multiple"},
    {id:"fri_fresada",nombre:"Férula FRI fresada",precio:15,unidad:"implante",protocolo:"implantes_multiple"},
    {id:"cementado_tibase",nombre:"Cementado TiBase / estructura",precio:5,unidad:"unidad",protocolo:"implante_unitario"},
    {id:"prueba_pasividad_aluminio",nombre:"Prueba pasividad aluminio",precio:200,unidad:"caso",protocolo:"implantes_multiple"},
    {id:"prueba_pasividad_escayola",nombre:"Prueba pasividad escayola",precio:50,unidad:"caso",protocolo:"implantes_multiple"},
    {id:"pilar_titanio_personalizado",nombre:"Pilar titanio personalizado",precio:95,unidad:"unidad",protocolo:"implante_unitario"},
    {id:"pilar_zirconio_personalizado",nombre:"Pilar zirconio personalizado",precio:95,unidad:"unidad",protocolo:"implante_unitario"},
    {id:"pilar_fresado",nombre:"Pilar fresado",precio:95,unidad:"unidad",protocolo:"implante_unitario"},
    {id:"ibar_blender_pilar",nombre:"IBar Blender · Pilar",precio:70,unidad:"unidad",protocolo:"implantes_multiple"},
    {id:"ibar_blender_pontico",nombre:"IBar Blender · Póntico",precio:55,unidad:"unidad",protocolo:"implantes_multiple"},
    {id:"barra_pasividad_atornillada",nombre:"Barra de pasividad atornillada",precio:200,unidad:"caso",protocolo:"implantes_multiple"},
    {id:"correccion_angulacion",nombre:"Corrección angulación + tornillo dinámico",precio:55,unidad:"implante",protocolo:"implantes_multiple"},
    {id:"ferula_descarga_fresada",nombre:"Férula de descarga",precio:80,unidad:"unidad",protocolo:"ferula"},
    {id:"guia_galucci",nombre:"Galucci",precio:45,unidad:"pieza",protocolo:"guia_quirurgica"},
    {id:"waxup_digital",nombre:"Wax-up",precio:10,unidad:"pieza",protocolo:"mockup"},
    {id:"escaneado_modelo",nombre:"Escaneado de modelo",precio:5,unidad:"modelo",protocolo:"mockup"},
    {id:"diseno_modelo_3d",nombre:"Diseño modelo 3D",precio:5,unidad:"caso",protocolo:"mockup"},
    {id:"llave_mockup",nombre:"Llave mock-up",precio:25,unidad:"llave",protocolo:"mockup"},
    {id:"llave_silicona_transparente",nombre:"Llave silicona transparente",precio:25,unidad:"llave",protocolo:"mockup"},
    {id:"modelo_estudio",nombre:"Modelo de estudio",precio:5,unidad:"modelo",protocolo:"modelo"},
    {id:"montaje_articulador",nombre:"Montaje en articulador",precio:10,unidad:"caso",protocolo:"modelo"},
    {id:"cubeta_fenestrada",nombre:"Cubeta fenestrada",precio:20,unidad:"unidad",protocolo:"implantes_multiple"},
    {id:"guia_verificacion",nombre:"Guía de verificación",precio:15,unidad:"unidad",protocolo:"implantes_multiple"},
    {id:"envio_interprovincial",nombre:"Envío interprovincial",precio:5,unidad:"envío",protocolo:"modelo"}
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
      "Las coronas monolíticas requieren TiBase e interfase. Estos componentes no están incluidos en el presupuesto del laboratorio.",
      "Las restauraciones atornilladas directas son metal-cerámica."
    ]
  },
  implantes_multiple: {
    titulo:"Implantes múltiples",
    puntos:[
      "Indicar marca, plataforma, conexión, altura gingival y referencias de scan bodies.",
      "Puentes o múltiples unidades: scan bodies rotatorios.",
      "Las interfases/TiBases son componentes externos: las aporta la clínica, se facturan directamente a clínica o se solicitan a nombre de la clínica.",
      "Consultar fecha con el laboratorio antes de programar pruebas clínicas."
    ]
  },
  rehabilitacion_completa: {
    titulo:"Rehabilitación completa",
    puntos:[
      "Primera fase: registros completos, fotografías, color, línea de sonrisa, mordida y planificación.",
      "Prueba de pasividad y rodetes atornillados según el caso.",
      "Prueba estética antes de la fase final.",
      "En Premium metal-cerámica o zirconio cut-back, modelos, FRI, pasividad y prueba estética quedan incluidos.",
      "En Standard monolítica se calculan unidades + modelos + encía + FRI + pasividad + prueba estética + cementados."
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
      "Calcular wax-up por pieza.",
      "El diseño de modelo 3D se cobra una vez por caso.",
      "Añadir modelo impreso y llave según bloque de encerado."
    ]
  },
  guia_quirurgica: {
    titulo:"Guía quirúrgica tipo Galucci",
    puntos:[
      "Se calcula por implante planificado.",
      "Confirmar planificación clínica antes de fabricación."
    ]
  },
  ferula: {
    titulo:"Férula de descarga",
    puntos:["Requiere modelo de trabajo y modelo antagonista."]
  },
  modelo: {
    titulo:"Modelos",
    puntos:[
      "En casos clínicos combinados, el modelo de trabajo y antagonista se cobran una sola vez por caso.",
      "Encía impresa solo en trabajos implantosoportados."
    ]
  }
};

let currentFlow = "corona";
let quote = [];
let protocolsInQuote = new Set();
let editingLineId = null;

const eur = n => Number(n || 0).toLocaleString("es-ES",{style:"currency",currency:"EUR"});
const $ = id => document.getElementById(id);
function quoteTotal(){
  return quote.reduce((sum,line)=>{
    return sum + (Number(line.qty || 0) * Number(line.price || 0));
  },0);
}

if($("date")){
  $("date").textContent = new Date().toLocaleDateString("es-ES");
}

function allProducts(){
  return [
    ...DATA.coronas,
    ...DATA.adhesiva,
    ...DATA.provisionales,
    ...DATA.rehabilitaciones,
    ...DATA.auxiliares
  ];
}

function findProduct(id){
  return allProducts().find(p=>p.id===id);
}

function options(list, filterFn=()=>true){
  return list
    .filter(filterFn)
    .map(p=>`<option value="${p.id}">${p.nombre} · ${p.precio==null ? "precio manual" : p.precio + " €"}</option>`)
    .join("");
}

function qty(label="Cantidad", value=1){
  return `<label>${label}<input type="number" id="qty" min="1" step="1" value="${value}"></label>`;
}

function manualBlock(){
  return `<div id="manualWrap" style="display:none"><label>Precio manual / coste proveedor<input id="manualPrice" type="number" min="0" step="0.01" placeholder="Introducir importe"></label></div>`;
}

function addQuoteLine(product, quantity=1, priceOverride=null, note=""){
  if(!product) return;

  const price = priceOverride !== null ? Number(priceOverride) : Number(product.precio || 0);
  const q = Number(quantity || 1);

  quote.push({
    id: product.id + "_" + Date.now() + "_" + Math.random().toString(16).slice(2),
    productId: product.id,
    nombre: product.nombre,
    qty: q,
    price,
    total: q * price,
    protocolo: product.protocolo,
    note
  });

  if(product.protocolo) protocolsInQuote.add(product.protocolo);
}

function renderForm(){
  let html = "";

  if(currentFlow === "corona"){
    html = `
      <div class="subgrid">
        <label>Soporte
          <select id="support">
            <option value="tallado">Diente tallado</option>
            <option value="implante">Implante</option>
          </select>
        </label>
        <label>Sector
          <select id="sector">
            <option value="anterior">Anterior</option>
            <option value="posterior">Posterior</option>
          </select>
        </label>
      </div>

      <div class="subgrid">
        <label>Requerimiento estético
          <select id="esthetic">
            <option value="no">No alto</option>
            <option value="alto">Alto</option>
          </select>
        </label>
        <label>Flujo
          <select id="workFlow">
            <option>Digital</option>
            <option>Analógico</option>
          </select>
        </label>
      </div>

      <label>Producto
        <select id="product"></select>
      </label>

      ${qty("Unidades",1)}
      <div id="implantFields"></div>
      ${manualBlock()}
      <div class="info-card" id="smartInfo"></div>
    `;
  }

  else if(currentFlow === "puente"){
    html = `
      <div class="info-card"><strong>Regla Dental Dome:</strong> el puente se calcula por número de coronas. Un puente de 3 = 3 unidades.</div>

      <div class="subgrid">
        <label>Soporte
          <select id="support">
            <option value="tallado">Diente tallado</option>
            <option value="implante">Implante</option>
          </select>
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
      <div class="info-card" id="smartInfo"></div>
    `;
  }

  else if(currentFlow === "rehabilitacion"){
    html = `
      <label>Tipo de rehabilitación
        <select id="rehabType">
          <option value="premium_mc">Premium · Metal-cerámica · precio cerrado</option>
          <option value="premium_zr">Premium · Zirconio cut-back · precio cerrado</option>
          <option value="standard">Standard · Zirconio monolítico por unidades</option>
        </select>
      </label>
      <div id="rehabForm"></div>
    `;
  }

  else if(currentFlow === "adhesiva"){
    html = `
      <label>Trabajo adhesivo
        <select id="product">${options(DATA.adhesiva)}</select>
      </label>
      ${qty("Unidades",1)}
      ${manualBlock()}
      <div class="info-card">En carillas, preguntar siempre si se realizará mock-up previo. Recomendado para resultados predecibles.</div>
    `;
  }

  else if(currentFlow === "provisional"){
    html = `
      <label>Tipo de provisional / prueba
        <select id="product">${options(DATA.provisionales)}</select>
      </label>
      ${qty("Unidades",1)}
      ${manualBlock()}
      <div class="info-card">PMMA monocapa: prueba estética. PMMA multicapa: provisional de larga duración.</div>
    `;
  }

  else if(currentFlow === "mockup"){
    html = `
      <div class="info-card"><strong>Mock-up:</strong> wax-up por pieza + diseño modelo 3D por caso + modelo impreso + llave según bloque.</div>
      <div class="subgrid">
        ${qty("Unidades wax-up",6)}
        <label>Número de modelos impresos<input type="number" id="modelos" min="0" value="1"></label>
      </div>
      <div class="subgrid">
        <label>Llaves mock-up<input type="number" id="llaveMock" min="0" value="1"></label>
        <label>Llaves silicona transparente<input type="number" id="llaveTrans" min="0" value="0"></label>
      </div>
    `;
  }

  else if(currentFlow === "ferula"){
    html = `
      <label>Producto
        <select id="product">
          <option value="ferula_descarga_fresada">Férula de descarga · 80 €</option>
        </select>
      </label>
      ${qty("Cantidad",1)}
    `;
  }

  else if(currentFlow === "guia"){
    html = `
      <label>Producto
        <select id="product">
          <option value="guia_galucci">Galucci · 45 €/pieza</option>
        </select>
      </label>
      ${qty("Número de implantes",1)}
    `;
  }

  else if(currentFlow === "auxiliar"){
    html = `
      <label>Auxiliar / modelo
        <select id="product">${options(DATA.auxiliares)}</select>
      </label>
      ${qty("Cantidad",1)}
      ${manualBlock()}
    `;
  }

  $("dynamicForm").innerHTML = html;
  attachFormEvents();
  updateSmartForm();
}

function implantExtra(){
  return `
    <div class="subgrid">
      <label>Marca implante<input id="implantBrand" placeholder="Marca"></label>
      <label>Sistema / plataforma<input id="implantSystem" placeholder="Sistema / conexión"></label>
      <label>Scan body<input id="scanbody" placeholder="Marca y referencia exacta"></label>
      <label>Tipo scan body
        <select id="scanType">
          <option>Antirrotatorio (unidad)</option>
          <option>Rotatorio (puente/múltiple)</option>
        </select>
      </label>
    </div>

    <label>Interfases / TiBases
      <select id="aditamentos">
        <option>Las aporta la clínica</option>
        <option>Facturadas directamente por proveedor a clínica</option>
        <option>Solicitadas por Dental Dome a nombre de la clínica</option>
      </select>
    </label>

    <label>¿Requiere pilar personalizado?
      <select id="pilar">
        <option value="no">No</option>
        <option value="pilar_titanio_personalizado">Pilar titanio personalizado · 95 €</option>
        <option value="pilar_zirconio_personalizado">Pilar zirconio personalizado · 95 €</option>
      </select>
    </label>
  `;
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

    if($("implantFields")){
      $("implantFields").innerHTML = support === "implante" ? implantExtra() : "";
    }

    let productList = DATA.coronas;

    if(support === "implante"){
      productList = productList.filter(p =>
        p.nombre.toLowerCase().includes("implante") ||
        p.nombre.toLowerCase().includes("s/i")
      );
    } else {
      productList = productList.filter(p =>
        p.nombre.toLowerCase().includes("tallado") ||
        p.id.includes("disilicato") ||
        p.id.includes("zr_mono")
      );
    }

    const old = $("product")?.value;

    if($("product")){
      $("product").innerHTML = options(productList);
      if(productList.some(p=>p.id===old)) $("product").value = old;
    }

    const p = findProduct($("product")?.value);

    if($("manualWrap")){
      $("manualWrap").style.display = p && p.precio == null ? "block" : "none";
    }

    if($("smartInfo")){
      $("smartInfo").innerHTML = support === "implante"
        ? "<strong>Implantes:</strong> indicar marca, sistema, plataforma y scan body. Las interfases/TiBases no están incluidas en el presupuesto del laboratorio. Se añadirá cementado según unidades."
        : "<strong>Dentosoportado:</strong> requiere modelo de trabajo y antagonista. En alto requerimiento estético, adjuntar fotografías y modelos pretratamiento.";
    }
  }

  if(["adhesiva","provisional","auxiliar"].includes(currentFlow)){
    const p = findProduct($("product")?.value);
    if($("manualWrap")){
      $("manualWrap").style.display = p && p.precio == null ? "block" : "none";
    }
  }

  if(currentFlow === "rehabilitacion"){
    renderRehabSubform();
  }
}

function renderRehabSubform(){
  const type = $("rehabType")?.value;
  const el = $("rehabForm");
  if(!el) return;

  if(type === "standard"){
    el.innerHTML = `
      <div class="info-card"><strong>Standard:</strong> se calcula por unidades + auxiliares. Las interfases/TiBases no están incluidas.</div>

      <div class="subgrid">
        <label>Número de coronas<input type="number" id="stdUnits" min="1" value="12"></label>
        <label>Número de implantes<input type="number" id="implantCount" min="0" value="6"></label>
      </div>

      <div class="subgrid">
        <label>Tipo de estructura
          <select id="zrStructure">
            <option value="interfase">Sobre interfases</option>
            <option value="blender">Sobre IBar Blender</option>
          </select>
        </label>
        <label>Número de pónticos Blender<input type="number" id="ponticCount" min="0" value="6"></label>
      </div>

      <div class="subgrid">
        <label>Modelos impresos<input type="number" id="modelCount" min="0" value="2"></label>
        <label>Tramos encía impresa<input type="number" id="gingivaCount" min="0" value="1"></label>
      </div>

      <label>Prueba pasividad
        <select id="passivity">
          <option value="prueba_pasividad_escayola">Escayola · 50 €</option>
          <option value="prueba_pasividad_aluminio">Aluminio · 200 €</option>
          <option value="none">No añadir</option>
        </select>
      </label>
    `;
  } else {
    const product = type === "premium_mc"
      ? findProduct("rehab_metal_ceramica_premium")
      : findProduct("rehab_zirconio_cutback_premium");

    el.innerHTML = `
      <div class="info-card"><strong>Precio cerrado:</strong> ${product.nombre}<br>Incluye: ${(product.incluye||[]).join(", ")}. No añadir estos conceptos por separado para evitar duplicados.</div>
      ${qty("Arcadas",1)}
    `;
  }

  attachFormEvents();
}

function addCurrent(){
  if(currentFlow === "mockup"){
    addQuoteLine(findProduct("waxup_digital"), $("qty").value);
    addQuoteLine(findProduct("diseno_modelo_3d"), 1);
    if(Number($("modelos").value) > 0) addQuoteLine(findProduct("modelo_impreso"), $("modelos").value);
    if(Number($("llaveMock").value) > 0) addQuoteLine(findProduct("llave_mockup"), $("llaveMock").value);
    if(Number($("llaveTrans").value) > 0) addQuoteLine(findProduct("llave_silicona_transparente"), $("llaveTrans").value);
    protocolsInQuote.add("mockup");
  }

  else if(currentFlow === "rehabilitacion"){
    const type = $("rehabType").value;

    if(type === "premium_mc"){
      addQuoteLine(findProduct("rehab_metal_ceramica_premium"), $("qty")?.value || 1);
    }

    if(type === "premium_zr"){
      addQuoteLine(findProduct("rehab_zirconio_cutback_premium"), $("qty")?.value || 1);
    }

    if(type === "standard"){
      const crowns = Number($("stdUnits").value || 0);
      const implants = Number($("implantCount").value || 0);
      const pontics = Number($("ponticCount").value || 0);
      const structure = $("zrStructure").value;

      addQuoteLine(findProduct("zr_mono_std_implante"), crowns, 90, "Rehabilitación Standard por unidades");
      addQuoteLine(findProduct("modelo_impreso"), $("modelCount").value, 20, "Modelos de trabajo y antagonista");
      addQuoteLine(findProduct("encia_impresa"), $("gingivaCount").value, 5, "Encía impresa · implantosoportado");
      addQuoteLine(findProduct("pmma_monocapa_implante"), crowns, 17, "Prueba estética PMMA");
      addQuoteLine(findProduct("fri_fresada"), implants);

      if($("passivity").value !== "none"){
        addQuoteLine(findProduct($("passivity").value), 1);
      }

      if(structure === "interfase"){
        addQuoteLine(findProduct("cementado_tibase"), implants, 5, "Cementado sobre interfases · por implante");
      }

      if(structure === "blender"){
        addQuoteLine(findProduct("ibar_blender_pilar"), implants);
        addQuoteLine(findProduct("ibar_blender_pontico"), pontics);
        addQuoteLine(findProduct("cementado_tibase"), crowns, 5, "Cementado sobre IBar Blender · por corona");
      }

      protocolsInQuote.add("rehabilitacion_completa");
      protocolsInQuote.add("implantes_multiple");
    }
  }

  else {
    const p = findProduct($("product").value);
    const price = p.precio == null ? Number($("manualPrice")?.value || 0) : null;
    addQuoteLine(p, $("qty").value, price);

    const support = $("support")?.value;

    if(["corona","puente"].includes(currentFlow)){
      addQuoteLine(findProduct("modelo_impreso"), 1, 20, "Modelo de trabajo");
      addQuoteLine(findProduct("modelo_impreso"), 1, 20, "Modelo antagonista");
    }

    if(support === "implante"){
      addQuoteLine(findProduct("encia_impresa"), 1, 5, "Encía impresa · implantosoportado");
      addQuoteLine(findProduct("cementado_tibase"), $("qty").value, 5, "Cementado TiBase / interfase");
      protocolsInQuote.add("implante_unitario");
    }

    const pilarId = $("pilar")?.value;
    if(pilarId && pilarId !== "no"){
      addQuoteLine(findProduct(pilarId), 1);
    }

    if(currentFlow === "puente"){
      protocolsInQuote.add(support === "implante" ? "implantes_multiple" : "corona_tallado");
    }
  }

  updateQuote();
}

function recalculateQuote(){
  quote = quote.map(l=>{
    const qty = Number(l.qty || 0);
    const price = Number(l.price || 0);
    return {...l, qty, price, total: qty * price};
  });

  protocolsInQuote = new Set(quote.map(l=>l.protocolo).filter(Boolean));
  updateQuote();
}

function updateQuote(){
  if($("quoteMeta")){
    $("quoteMeta").innerHTML = `
      <span>Clínica: ${$("clinica")?.value || "—"}</span>
      <span>Doctor/a: ${$("doctor")?.value || "—"}</span>
      <span>Paciente: ${$("paciente")?.value || "—"}</span>
    `;
  }

  const tbody = $("quoteLines");
  if(!tbody) return;

  tbody.innerHTML = quote.map(l=>{
    if(l.id === editingLineId){
      return `
        <tr class="editing-row">
          <td>
            <input class="line-name-input" id="editName_${l.id}" value="${String(l.nombre).replaceAll('"','&quot;')}">
            ${l.note ? `<br><small>${l.note}</small>` : ""}
          </td>
          <td class="num"><input class="line-qty-input" id="editQty_${l.id}" type="number" min="0" step="1" value="${l.qty}"></td>
          <td class="num"><input class="line-price-input" id="editPrice_${l.id}" type="number" min="0" step="0.01" value="${l.price}"></td>
          <td class="num">${eur(Number(l.qty||0)*Number(l.price||0))}</td>
          <td class="line-actions">
            <button class="edit" onclick="saveLine('${l.id}')">Guardar</button>
            <button class="remove" onclick="cancelEdit()">Cancelar</button>
          </td>
        </tr>
      `;
    }

    return `
      <tr>
        <td>${l.nombre}${l.note ? `<br><small>${l.note}</small>` : ""}</td>
        <td class="num">${l.qty}</td>
        <td class="num">${eur(l.price)}</td>
        <td class="num">${eur(l.total)}</td>
        <td class="line-actions">
          <button class="edit" onclick="editLine('${l.id}')">Editar</button>
          <button class="remove" onclick="removeLine('${l.id}')">×</button>
        </td>
      </tr>
    `;
  }).join("") || `<tr><td colspan="5">Sin conceptos todavía.</td></tr>`;

  quote.forEach(l=>{
  l.total = Number(l.qty || 0) * Number(l.price || 0);
});

$("total").textContent = eur(quoteTotal());
  renderWarnings();
  renderProtocols();
}

function editLine(id){
  editingLineId = id;
  updateQuote();
}

function cancelEdit(){
  editingLineId = null;
  updateQuote();
}

function saveLine(id){
  const line = quote.find(l=>l.id === id);
  if(!line) return;

  line.nombre = $("editName_"+id)?.value || line.nombre;
  line.qty = Number($("editQty_"+id)?.value || 0);
  line.price = Number($("editPrice_"+id)?.value || 0);
  line.total = line.qty * line.price;

  editingLineId = null;
  recalculateQuote();
}

function removeLine(id){
  quote = quote.filter(l=>l.id !== id);
  if(editingLineId === id) editingLineId = null;
  protocolsInQuote = new Set(quote.map(l=>l.protocolo).filter(Boolean));
  updateQuote();
}

function renderWarnings(){
  const out = [];
  const hasImplant = [...protocolsInQuote].some(x=>x.includes("implante")) || quote.some(l=>/implante|TiBase|FRI|pasividad|IBar|encía/i.test(l.nombre));
  const highEsthetic = quote.some(l=>/feldespática|estratificada|cut-back|Premium|personalizada/i.test(l.nombre));

  if(hasImplant){
    out.push("Implantes: indicar marca, plataforma, conexión, altura gingival y referencia exacta del scan body.");
    out.push("Unidad: scan body antirrotatorio. Puente o múltiples unidades: scan body rotatorio.");
    out.push("Las interfases/TiBases no están incluidas en el presupuesto del laboratorio. Las aporta la clínica, las factura el proveedor a la clínica o se solicitan a nombre de la clínica.");
  }

  if(highEsthetic){
    out.push("Alto requerimiento estético: enviar fotografías, modelos pretratamiento y toda la información del paciente.");
  }

  out.push("Consultar siempre la fecha con el laboratorio antes de citar al paciente.");

  $("warnings").innerHTML = [...new Set(out)].map(w=>`<div class="warning">${w}</div>`).join("");
}

function renderProtocols(){
  if(protocolsInQuote.size === 0){
    $("protocolOutput").innerHTML = "Selecciona un trabajo para generar protocolo.";
    return;
  }

  $("protocolOutput").innerHTML = [...protocolsInQuote].map(key=>{
    const p = PROTOCOLS[key];
    if(!p) return "";
    return `<div><strong>${p.titulo}</strong><ul>${p.puntos.map(x=>`<li>${x}</li>`).join("")}</ul></div>`;
  }).join("");
}

function renderLibraries(){
  if($("priceLibrary")){
    const groupedPrices = [
      ["Zirconio sobre tallado", DATA.coronas.filter(p =>
        p.id.includes("tallado") || p.id === "zr_mono_personalizada"
      )],
      ["Zirconio sobre implante", DATA.coronas.filter(p =>
        p.id.includes("implante") || p.nombre.toLowerCase().includes("s/i")
      )],
      ["Disilicato de litio", DATA.coronas.filter(p =>
        p.id.includes("disilicato")
      )],
      ["Metal-cerámica", DATA.coronas.filter(p =>
        p.id.includes("metal_ceramica")
      )],
      ["Adhesiva / estética", DATA.adhesiva],
      ["Provisionales", DATA.provisionales],
      ["Rehabilitaciones completas", DATA.rehabilitaciones],
      ["Modelos, implantes y auxiliares", DATA.auxiliares]
    ];

    $("priceLibrary").innerHTML = groupedPrices.map(([title, list]) => `
      <div class="price-category">
        <h3>${title}</h3>
        <div class="price-category-grid">
          ${list.map(p => `
            <div class="price-card">
              <strong>${p.precio == null ? "Manual / confirmar" : eur(p.precio)}</strong>
              <span>${p.nombre}</span>
              <span>${p.unidad || "unidad"}</span>
            </div>
          `).join("")}
        </div>
      </div>
    `).join("");
  }

  if($("protocolLibrary")){
    $("protocolLibrary").innerHTML = Object.values(PROTOCOLS).map(p => `
      <div class="protocol-block">
        <h3>${p.titulo}</h3>
        <ul>${p.puntos.map(x => `<li>${x}</li>`).join("")}</ul>
      </div>
    `).join("");
  }
}


/* ODONTOGRAMA */

const TEETH_ROWS = [
  [17,16,15,14,13,12,11, "divider", 21,22,23,24,25,26,27],
  ["separator"],
  [47,46,45,44,43,42,41, "divider", 31,32,33,34,35,36,37]
];

let selectedTooth = null;
let clinicalCase = {};

function renderOdontogram(){
  const el = $("odontogram");
  if(!el) return;

  el.innerHTML = TEETH_ROWS.map(row => {
    if(row[0] === "separator"){
      return `<div class="odontogram-separator"></div>`;
    }

    return `
      <div class="odontogram-row dental-cross-row">
        ${row.map(t => {
          if(t === "divider"){
            return `<span class="odontogram-divider"></span>`;
          }

          const item = clinicalCase[t];
          const classes = [
            "tooth-btn",
            selectedTooth === t ? "selected" : "",
            item ? "has-work" : "",
           item?.restoration === "implante" ? "implant" : "",
           item?.restoration === "pontico" ? "pontic" : "",
           item?.restoration === "ausente" ? "absent" : ""
          ].join(" ");

          return `<button class="${classes}" onclick="selectTooth(${t})">${t}</button>`;
        }).join("")}
      </div>
    `;
  }).join("");

  renderCaseSummary();
}

function selectTooth(tooth){
  selectedTooth = tooth;

  if($("selectedTooth")){
    $("selectedTooth").textContent = tooth;
  }

  const item = clinicalCase[tooth];

  if($("toothRestoration")) $("toothRestoration").value = item?.restoration || "";
  if($("toothMaterial")) $("toothMaterial").value = item?.material || "";

  renderOdontogram();
}

function saveSelectedTooth(){
  if(!selectedTooth){
    alert("Selecciona una pieza primero.");
    return;
  }

  const restoration = $("toothRestoration").value;
  const material = $("toothMaterial").value;

  if(!restoration){
    alert("Selecciona una restauración.");
    return;
  }

  clinicalCase[selectedTooth] = {
    tooth: selectedTooth,
    restoration,
    material
  };

  renderOdontogram();
}

function clearClinicalCase(){
  clinicalCase = {};
  selectedTooth = null;

  if($("selectedTooth")){
    $("selectedTooth").textContent = "—";
  }

  renderOdontogram();
}

function renderCaseSummary(){
  const el = $("caseSummary");
  if(!el) return;

  const items = Object.values(clinicalCase);

  if(items.length === 0){
    el.innerHTML = "Sin piezas seleccionadas.";
    return;
  }

  el.innerHTML = `
    <ul>
      ${items.map(i => `
        <li>
          <strong>${i.tooth}</strong> · ${labelRestoration(i.restoration)} ${i.material ? "· " + labelMaterial(i.material) : ""}
        </li>
      `).join("")}
    </ul>
  `;
}

function labelRestoration(value){
  const labels = {
    corona:"Corona",
    carilla:"Carilla",
    inlay_onlay:"Inlay / Onlay / Table Top",
    implante:"Implante",
    pontico:"Póntico",
    ausente:"Ausente"
  };

  return labels[value] || value;
}

function labelMaterial(id){
  const p = findProduct(id);
  return p ? p.nombre : id;
}

function generateQuoteFromCase(){
  const items = Object.values(clinicalCase);

  if(items.length === 0){
    alert("No hay piezas en el caso.");
    return;
  }

  quote = [];
  protocolsInQuote.clear();

  const billable = items.filter(i => i.material);
  const hasImplants = items.some(i => i.restoration === "implante");
  const hasWork = billable.length > 0;

  billable.forEach(i => {
    const product = findProduct(i.material);
    if(product){
      addQuoteLine(product, 1, null, `Pieza ${i.tooth}`);
    }
  });

  if(hasWork){
    addQuoteLine(findProduct("modelo_impreso"), 1, 20, "Modelo de trabajo");
    addQuoteLine(findProduct("modelo_impreso"), 1, 20, "Modelo antagonista");
    protocolsInQuote.add("modelo");
  }

  if(hasImplants){
    addQuoteLine(findProduct("encia_impresa"), 1, 5, "Encía impresa · caso implantosoportado");
    protocolsInQuote.add("implantes_multiple");
  }

  if(billable.some(i=>["corona"].includes(i.restoration))){
    protocolsInQuote.add("corona_tallado");
  }

  if(billable.some(i=>["carilla","inlay_onlay"].includes(i.restoration))){
    protocolsInQuote.add("adhesiva_estetica");
  }

  updateQuote();

  document.querySelectorAll(".view").forEach(v=>v.classList.remove("active"));
  $("view-presupuesto").classList.add("active");

  document.querySelectorAll(".nav-item").forEach(b=>b.classList.remove("active"));
  document.querySelector('.nav-item[data-view="presupuesto"]')?.classList.add("active");
}

/* EVENTOS */

document.querySelectorAll(".work-card").forEach(card=>{
  card.addEventListener("click",()=>{
    document.querySelectorAll(".work-card").forEach(c=>c.classList.remove("selected"));
    card.classList.add("selected");
    currentFlow = card.dataset.flow;
    renderForm();
  });
});

document.querySelectorAll(".nav-item").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelectorAll(".nav-item").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");

    document.querySelectorAll(".view").forEach(v=>v.classList.remove("active"));
    $("view-" + btn.dataset.view).classList.add("active");

    if(btn.dataset.view === "caso"){
      renderOdontogram();
    }
  });
});

["clinica","doctor","paciente"].forEach(id=>{
  if($(id)) $(id).addEventListener("input",updateQuote);
});

if($("addLine")) $("addLine").addEventListener("click",addCurrent);

if($("clearQuote")){
  $("clearQuote").addEventListener("click",()=>{
    quote = [];
    protocolsInQuote.clear();
    editingLineId = null;
    updateQuote();
  });
}

if($("recalculateQuote")) $("recalculateQuote").addEventListener("click",recalculateQuote);
if($("resetForm")) $("resetForm").addEventListener("click",renderForm);
$("printPdf").addEventListener("click",generateCorporatePdf);

if($("copyWhatsApp")){
  $("copyWhatsApp").addEventListener("click",()=>{
    const lines = quote.map(l=>`- ${l.nombre} x${l.qty}: ${eur(l.total)}${l.note ? ` (${l.note})` : ""}`).join("\n");
    const protocols = [...protocolsInQuote].map(k=>PROTOCOLS[k]?.titulo).filter(Boolean).join(", ");

    const text = `PRESUPUESTO DENTAL DOME
Clínica: ${$("clinica")?.value || "-"}
Doctor/a: ${$("doctor")?.value || "-"}
Paciente: ${$("paciente")?.value || "-"}

${lines}

TOTAL: ${$("total")?.textContent || "0 €"}

Protocolos: ${protocols}

Observación:
Consultar siempre la fecha con el laboratorio antes de citar al paciente.
Las interfases/TiBases no están incluidas en el presupuesto del laboratorio salvo indicación expresa.`;

    navigator.clipboard.writeText(text).then(()=>alert("Resumen copiado para WhatsApp."));
  });
}
async function generateCorporatePdf(){

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF("p","mm","a4");

  const total = $("total")?.textContent || "0 €";

  const clinica = $("clinica")?.value || "-";
  const doctor = $("doctor")?.value || "-";
  const paciente = $("paciente")?.value || "-";

  const presupuestoId = $("quoteNumber")?.textContent || "DD-2026-001";

  const piezas = Object.values(clinicalCase)
    .map(x=>x.tooth)
    .join(", ") || "-";

  const trabajos = [...new Set(
    quote.map(x=>x.nombre.split("·")[0].trim())
  )].join(", ");

  /* PAGINA 1 */

  doc.setFillColor(79,89,76);
  doc.rect(0,0,210,22,"F");

  doc.setTextColor(255,255,255);
  doc.setFontSize(18);
  doc.text("DENTAL DOME L.a.b",15,14);

  doc.setFontSize(10);
  doc.text("Presupuesto protésico",150,14);

  doc.setTextColor(0,0,0);

  doc.setFontSize(14);
  doc.text("Datos del caso",15,35);

  doc.setFontSize(10);

  doc.text(`Presupuesto: ${presupuestoId}`,15,45);
  doc.text(`Fecha: ${new Date().toLocaleDateString("es-ES")}`,15,52);

  doc.text(`Clínica: ${clinica}`,15,65);
  doc.text(`Doctor/a: ${doctor}`,15,72);
  doc.text(`Paciente: ${paciente}`,15,79);

  doc.setFontSize(14);
  doc.text("Resumen clínico",15,98);

  doc.setFontSize(10);

  doc.text(`Piezas restauradas: ${piezas}`,15,108);

  const splitTrabajo = doc.splitTextToSize(
    `Trabajo: ${trabajos}`,
    170
  );

  doc.text(splitTrabajo,15,116);

  doc.setDrawColor(180);
  doc.roundedRect(15,130,180,50,3,3);

  doc.setFontSize(11);
  doc.text(
    "Odontograma clínico (versión PDF corporativa pendiente de integración gráfica)",
    20,
    145
  );

  doc.setFontSize(9);
  doc.text(
    piezas || "Sin piezas seleccionadas",
    20,
    160
  );

  doc.setFontSize(9);
  doc.text(
    "Consultar siempre la fecha con el laboratorio antes de citar al paciente.",
    15,
    200
  );

  /* PAGINA 2 */

  doc.addPage();

  doc.setFillColor(79,89,76);
  doc.rect(0,0,210,18,"F");

  doc.setTextColor(255,255,255);
  doc.setFontSize(14);
  doc.text("Detalle económico",15,12);

  doc.setTextColor(0,0,0);

  let y = 30;

  doc.setFontSize(10);

  doc.text("Concepto",15,y);
  doc.text("Cant.",120,y);
  doc.text("€/ud",145,y);
  doc.text("Total",175,y);

  y += 5;

  doc.line(15,y,195,y);

  y += 8;

  quote.forEach(line=>{

    if(y > 260){
      doc.addPage();
      y = 20;
    }

    doc.text(
      doc.splitTextToSize(line.nombre,90),
      15,
      y
    );

    doc.text(String(line.qty),125,y);
    doc.text(line.price.toFixed(2)+" €",145,y);
    doc.text(line.total.toFixed(2)+" €",175,y);

    y += 10;
  });

  y += 10;

  doc.setFillColor(79,89,76);
  doc.rect(120,y,70,12,"F");

  doc.setTextColor(255,255,255);
  doc.setFontSize(12);
  doc.text(`TOTAL ${total}`,125,y+8);

  y += 25;

  doc.setTextColor(0,0,0);

  doc.setFontSize(12);
  doc.text("Observaciones",15,y);

  y += 8;

  const observaciones = [
    "Consultar siempre la fecha con el laboratorio antes de citar al paciente.",
    "En casos estéticos enviar fotografías clínicas y registros completos.",
    "En implantes indicar marca, plataforma y referencia exacta de scanbody.",
    "Las interfases/TiBases no están incluidas salvo indicación expresa."
  ];

  observaciones.forEach(txt=>{
    doc.text("• " + txt,18,y);
    y += 6;
  });

  doc.save(`${presupuestoId}.pdf`);
}
document.addEventListener("DOMContentLoaded",()=>{
  renderForm();
  updateQuote();
  renderLibraries();
  renderOdontogram();

  if($("saveTooth")) $("saveTooth").addEventListener("click", saveSelectedTooth);
  if($("clearCase")) $("clearCase").addEventListener("click", clearClinicalCase);
  if($("generateCaseQuote")) $("generateCaseQuote").addEventListener("click", generateQuoteFromCase);
});
