window.TEAM_FIXTURES = {
 updatedAt:'2026-09-28', season:'2026/27', competition:'Terza Categoria · Vicenza · Girone Unico',
 source:'https://www.tuttocampo.it/Veneto/TerzaCategoria/GironeAVicenza/Squadra/MontecchioSPietroSqB/1238518/Calendario',
 teams:[
  ['GS Montecchio S. Pietro Sq. B',1238518,'stemma-gs-montecchio-san-pietro.png?v=68'],
  ['Atletico Montebello Vicentino',1283491],['Calcio Gazzo',70566],['Junior Monticello Sq. B',1324899],
  ['Lakota',71893],['Lions Alto Chiampo',1087001],['Ospedaletto Vicenza',1199566],['Pedezzi 1950',1323842],
  ['PGS Concordia',1005793],['Piana 2025',1324896,'https://b2-content.tuttocampo.it/default_team_logo.png'],['Recoaro',1057845],['Rino Toniolo',1098609],
  ['Riviera Berica Sq. B',1199567],['San Bortolo Vicenza',1324897],['San Vitale 1995 Sq. B',1199590],['Valli',65290]
 ].map(([name,id,logo])=>({name,id,logo:logo||`https://b2-content.tuttocampo.it/Teams/Original/${id}.png?v=2`})),
 matches:[
  [4,1238518,1199566,'2026-10-04','15:30','Montecchio Maggiore','4.5/montecchio-s-pietro-sq-b-ospedaletto-vicenza'],
  [5,1005793,1238518,'2026-10-11','15:30','Schio','5.3/pgs-concordia-montecchio-s-pietro-sq-b'],
  [6,1238518,1324899,'2026-10-18','15:30','Montecchio Maggiore','6.5/montecchio-s-pietro-sq-b-junior-monticello-sq-b'],
  [7,1087001,1238518,'2026-10-25','14:30','Chiampo','7.4/lions-alto-chiampo-montecchio-s-pietro-sq-b'],
  [8,1199567,1238518,'2026-10-31','15:00','Vicenza','8.7/riviera-berica-sq-b-montecchio-s-pietro-sq-b'],
  [9,1238518,71893,'2026-11-08','14:30','Montecchio Maggiore','9.4/montecchio-s-pietro-sq-b-lakota'],
  [10,1199590,1238518,'2026-11-15','14:30','Montecchio Maggiore','10.8/san-vitale-1995-sq-b-montecchio-s-pietro-sq-b'],
  [11,1238518,70566,'2026-11-22','14:30','Montecchio Maggiore','11.4/montecchio-s-pietro-sq-b-calcio-gazzo'],
  [12,1324897,1238518,'2026-11-29','14:30','Capovilla','12.2/san-bortolo-vicenza-montecchio-s-pietro-sq-b'],
  [13,1238518,1057845,'2026-12-06','14:30','Montecchio Maggiore','13.5/montecchio-s-pietro-sq-b-recoaro'],
  [14,1283491,1238518,'2026-12-13','14:30','Montebello Vicentino','14.3/atletico-montebello-vicentino-montecchio-s-pietro-sq-b'],
  [15,1238518,1324896,'2026-12-20','14:30','Montecchio Maggiore','15.5/montecchio-s-pietro-sq-b-piana-2025'],
  [16,1238518,1323842,'2027-01-10','14:30','Montecchio Maggiore','16.5/montecchio-s-pietro-sq-b-pedezzi-1950'],
  [17,1098609,1238518,'2027-01-17','14:30','Thiene','17.6/rino-toniolo-montecchio-s-pietro-sq-b'],
  [18,1238518,65290,'2027-01-24','14:30','Montecchio Maggiore','18.8/montecchio-s-pietro-sq-b-valli'],
  [19,1199566,1238518,'2027-01-31','14:30','Ospedaletto','19.5/ospedaletto-vicenza-montecchio-s-pietro-sq-b'],
  [20,1238518,1005793,'2027-02-07','14:30','Montecchio Maggiore','20.3/montecchio-s-pietro-sq-b-pgs-concordia'],
  [21,1324899,1238518,'2027-02-13','17:30','Monticello Conte Otto','21.5/junior-monticello-sq-b-montecchio-s-pietro-sq-b'],
  [22,1238518,1087001,'2027-02-21','14:30','Montecchio Maggiore','22.4/montecchio-s-pietro-sq-b-lions-alto-chiampo'],
  [23,1238518,1199567,'2027-02-28','14:30','Montecchio Maggiore','23.7/montecchio-s-pietro-sq-b-riviera-berica-sq-b'],
  [24,71893,1238518,'2027-03-07','14:30','Fara Vicentino','24.4/lakota-montecchio-s-pietro-sq-b'],
  [25,1238518,1199590,'2027-03-14','14:30','Montecchio Maggiore','25.8/montecchio-s-pietro-sq-b-san-vitale-1995-sq-b'],
  [26,70566,1238518,'2027-03-20','15:00','Gazzo Padovano','26.4/calcio-gazzo-montecchio-s-pietro-sq-b'],
  [27,1238518,1324897,'2027-04-04','15:30','Montecchio Maggiore','27.2/montecchio-s-pietro-sq-b-san-bortolo-vicenza'],
  [28,1057845,1238518,'2027-04-11','15:30','Recoaro','28.5/recoaro-montecchio-s-pietro-sq-b'],
  [29,1238518,1283491,'2027-04-18','15:30','Montecchio Maggiore','29.3/montecchio-s-pietro-sq-b-atletico-montebello-vicentino'],
  [30,1324896,1238518,'2027-04-25','15:30','Valdagno','30.5/piana-2025-montecchio-s-pietro-sq-b']
 ].map(([round,homeId,awayId,date,time,place,path])=>({round,homeId,awayId,date,time,place,status:'scheduled',url:`https://www.tuttocampo.it/Veneto/TerzaCategoria/GironeAVicenza/Partita/${path}`})),
 venues:{
  1238518:{name:'Angelo Giuriato',address:'Via Circonvallazione 43-47, Montecchio Maggiore'},1005793:{name:'Sintetico comunale di Santorso',address:'Via Guglielmo Marconi, Schio'},
  1087001:{name:'Campo sportivo Arso',address:'Via Santo 31, Chiampo'},1199567:{name:'Campo comunale',address:'Via Luigi Einaudi, Vicenza'},1199590:{name:'Campo San Vitale',address:'Montecchio Maggiore'},70566:{name:'Comunale',address:'Via Dello Sport 19, Gazzo Padovano'},
  1324897:{name:'Campo comunale Capovilla',address:'Via Capovilla, Capovilla'},1283491:{name:'Parrocchiale Don Bosco',address:'Via G. Cederle 26, Montebello Vicentino'},1098609:{name:'Campo Rino Toniolo',address:'Via Don Angelo Ziliotto, Thiene'},
  65290:{name:'Valli Stadium',address:'Via Monsignor Pietro Bicego, Valli del Pasubio'},1199566:{name:'Campo comunale Roberto Buzzolan',address:'Via A. Palladio, Ospedaletto'},1324899:{name:'Campo sintetico Antonio Girardo',address:'Via Aldo Moro 6, Monticello Conte Otto'},
  71893:{name:'Comunale Fara Vicentino',address:'Via Astico, Fara Vicentino'},1057845:{name:'Comunale',address:'Recoaro Terme'},1324896:{name:'Stadio comunale Belvedere di Piana',address:'Via Chiesa di Piana, Valdagno'},1323842:{name:'Campo sportivo Laghetto',address:'Via Lago Di Alleghe, Vicenza'}
 }
};

(function () {
 const data=window.TEAM_FIXTURES, TEAM_ID=1238518, zone='Europe/Rome';
 function kickoff(match) {
  const parts=(match.date+'T'+match.time).split(/[-T:]/).map(Number), wall=Date.UTC(parts[0],parts[1]-1,parts[2],parts[3],parts[4]);
  let stamp=wall;
  for(let i=0;i<2;i++){
   const formatted=new Intl.DateTimeFormat('en-GB',{timeZone:zone,year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit',hourCycle:'h23'}).formatToParts(stamp);
   const p=Object.fromEntries(formatted.map(x=>[x.type,x.value])), asUTC=Date.UTC(+p.year,+p.month-1,+p.day,+p.hour,+p.minute,+p.second);
   stamp=wall-(asUTC-stamp);
  }
  return stamp;
 }
 function select(now=Date.now()){return data.matches.filter(m=>m.status==='scheduled'&&Number.isFinite(kickoff(m))&&now<kickoff(m)).sort((a,b)=>kickoff(a)-kickoff(b))[0]||null;}
 function escape(value){return String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
 function team(id){
  const t=data.teams.find(item=>item.id===id), isGs=id===TEAM_ID;
  const fullName=isGs?'Montecchio S. Pietro Sq. B':t.name, parts=fullName.match(/^(.*?)\s+Sq\. B$/i);
  const name=parts?parts[1]:fullName, qualifier=parts?'Sq. B':'';
  return `<div class="next-match-team ${isGs?'is-gs-team':'is-opponent-team'}"><span class="next-match-crest"><img src="${escape(t.logo)}" alt="Stemma ${escape(t.name)}"></span><strong class="${qualifier?'has-qualifier':'no-qualifier'}"><span class="next-match-name">${escape(name)}</span><span class="next-match-qualifier"${qualifier?'':' aria-hidden="true"'}>${qualifier||'&nbsp;'}</span></strong></div>`;
 }
 function directions(m){
  if(m.awayId!==TEAM_ID)return '';
  const venue=m.venue||(data.venues||{})[m.homeId];
  if(!venue||!venue.address)return '';
  const destination=venue.name+', '+venue.address+', Italia', url='https://www.google.com/maps/dir/?api=1&destination='+encodeURIComponent(destination);
  return `<div class="match-venue"><div><strong>${escape(venue.name)}</strong><span>${escape(venue.address)}</span></div><a class="match-maps" href="${escape(url)}" target="_blank" rel="noopener noreferrer" aria-label="Apri in Maps: ${escape(destination)}"><svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="m21 3-7 18-4-7-7-4Z"/><path d="m10 14 11-11"/></svg>Apri in Maps</a></div>`;
 }
 function contents(now=Date.now()){
  const m=select(now);
  if(!m)return `<div class="next-match-top"><span>NEXT MATCH</span></div><p>Nessuna prossima partita nel calendario caricato.</p><div class="next-match-bottom"><a href="${data.source}" target="_blank" rel="noopener noreferrer">Verifica su Tuttocampo ↗</a></div>`;
  const date=new Intl.DateTimeFormat('it-IT',{timeZone:zone,weekday:'short',day:'numeric',month:'short'}).format(kickoff(m));
  return `<div class="next-match-top"><span><i></i>${now>=kickoff(m)?'MATCH DAY':'NEXT MATCH'}</span><span class="next-match-demo">${m.round}ª GIORNATA</span></div><div class="next-match-teams">${team(m.homeId)}<div class="next-match-time"><span>${escape(date)}</span><strong>${escape(m.time)}</strong><small>Ora italiana</small></div>${team(m.awayId)}</div><div class="next-match-bottom"><span>${m.homeId===TEAM_ID?'In casa':'In trasferta'} · ${escape(m.place)}</span><a href="${escape(m.url)}" target="_blank" rel="noopener noreferrer">Tuttocampo ↗</a></div>${directions(m)}`;
 }
 window.MatchCalendar={kickoff,select,contents,directions};
 window.renderNextMatch=()=>`<section id="nextMatchBanner" class="next-match" aria-label="Prossima partita">${contents()}</section>`;
 function refresh(){const banner=document.getElementById('nextMatchBanner');if(banner)banner.innerHTML=contents();}
 setInterval(refresh,60000); document.addEventListener('visibilitychange',()=>{if(!document.hidden)refresh();}); window.addEventListener('pageshow',refresh);
})();
