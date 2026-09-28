window.TEAM_FIXTURES = {
 updatedAt:'2026-09-28', season:'2026/27', competition:'Terza Categoria · Vicenza · Girone Unico',
 source:'https://www.tuttocampo.it/Veneto/TerzaCategoria/GironeAVicenza/Squadra/MontecchioSPietroSqB/1238518/Calendario',
 teams:[
  ['GS Montecchio S. Pietro Sq. B',1238518,'stemma-gs-montecchio-san-pietro.png'],
  ['Atletico Montebello Vicentino',1283491],['Calcio Gazzo',70566],['Junior Monticello Sq. B',1324899],
  ['Lakota',71893],['Lions Alto Chiampo',1087001],['Ospedaletto Vicenza',1199566],['Pedezzi 1950',1323842],
  ['PGS Concordia',1005793],['Piana 2025',1324896],['Recoaro',1057845],['Rino Toniolo',1098609],
  ['Riviera Berica Sq. B',1199567],['San Bortolo Vicenza',1324897],['San Vitale 1995 Sq. B',1199590],['Valli',65290]
 ].map(([name,id,logo])=>({name,id,logo:logo||`https://b2-content.tuttocampo.it/Teams/40/${id}.png`})),
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
  1238518:'Angelo Giuriato, Via Circonvallazione 43-47, Montecchio Maggiore',1005793:'Via Guglielmo Marconi, Schio',
  1087001:'Via Santo 31, Chiampo',1199567:'Via Luigi Einaudi, Vicenza',1199590:'Montecchio Maggiore',70566:'Via Dello Sport 19, Gazzo Padovano',
  1324897:'Via Capovilla, Capovilla',1283491:'Via G. Cederle 26, Montebello Vicentino',1098609:'Via Don Angelo Ziliotto, Thiene',
  65290:'Via Monsignor Pietro Bicego, Valli del Pasubio',1199566:'Via A. Palladio, Ospedaletto',1324899:'Via Aldo Moro 6, Monticello Conte Otto',
  71893:'Via Astico, Fara Vicentino',1057845:'Recoaro Terme',1324896:'Via Chiesa di Piana, Valdagno',1323842:'Via Lago Di Alleghe, Vicenza'
 }
};

(()=>{
 const TEAM_ID=1238518, data=window.TEAM_FIXTURES;
 const team=id=>data.teams.find(item=>item.id===id);
 const matchDate=match=>new Date(`${match.date}T${match.time}:00`);
 const next=data.matches.filter(match=>matchDate(match)>=new Date()).sort((a,b)=>matchDate(a)-matchDate(b))[0];
 if(!next)return;
 const home=team(next.homeId),away=team(next.awayId), awayGame=next.awayId===TEAM_ID;
 const formatDate=value=>new Intl.DateTimeFormat('it-IT',{weekday:'long',day:'numeric',month:'long'}).format(value);
 const teamCard=(item,side)=>`<div class="next-team next-team-${side}"><img src="${item.logo}" alt="Stemma ${item.name}" width="56" height="56"><strong>${item.name}</strong></div>`;
 const maps=awayGame?`<a class="next-match-directions" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(data.venues[next.homeId]||next.place)}" target="_blank" rel="noopener noreferrer">Indicazioni</a>`:'';
 const html=`<section class="next-match" aria-label="Prossima partita"><div class="next-match-kicker">PROSSIMA PARTITA · GIORNATA ${next.round}</div><div class="next-match-date">${formatDate(matchDate(next))} · ore ${next.time}</div><div class="next-match-teams">${teamCard(home,'home')}<span class="next-match-vs">VS</span>${teamCard(away,'away')}</div><div class="next-match-meta"><span>${next.place}</span><span>${data.competition}</span></div><div class="next-match-links"><a href="${next.url}" target="_blank" rel="noopener noreferrer">Partita su Tuttocampo</a>${maps}<a href="${data.source}" target="_blank" rel="noopener noreferrer">Calendario completo</a></div></section>`;
 const mount=()=>{const root=document.querySelector('.content');if(root&&!root.querySelector('.next-match'))root.insertAdjacentHTML('afterbegin',html);};
 document.addEventListener('DOMContentLoaded',mount); new MutationObserver(mount).observe(document.body,{childList:true,subtree:true});
})();
