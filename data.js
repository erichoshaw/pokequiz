var data_raw = "Bulbasaur,30,25,36,10,-10,3,42,44,-37,-22,-12,16,-29,39,40,0\nIvysaur,25,22,33,16,-27,28,37,37,-37,10,12,12,15,-13,28,10\nVenosaur,25,-10,33,37,-20,30,42,44,-37,-22,0,-30,-30,0,40,0\nCharmander,-10,25,-10,-36,27,-31,-21,-20,22,38,-38,-29,20,-36,-5,20\nCharmeleon,-43,25,-10,-36,-19,27,-21,-20,29,42,-38,-29,45,-36,-42,40\nCharizard,-20,25,-10,-10,27,27,29,-5,0,42,-38,-29,37,-36,-10,25\nSquirtle,-10,-10,-30,0,0,5,28,28,-36,19,0,22,-30,-12,25,0\nWartortle,-10,22,-30,-5,0,10,22,28,-20,30,0,22,35,-12,-20,20\nBlastoise,-10,-40,-30,0,-10,25,39,35,-36,19,0,-10,10,-12,25,10\nCaterpie,20,-30,5,-5,-39,20,35,40,-30,0,0,45,-39,42,37,0\nMetapod,-30,-50,-40,0,-45,38,40,40,-50,0,25,0,-45,42,37,0\nButterfree,30,30,35,20,29,-20,35,40,10,0,-40,-35,-39,42,37,-30\nWeedle,-30,-27,-33,-42,-35,36,2,-22,5,-20,0,38,23,-30,-22,0\nKaukuna,-45,-50,-33,-40,-40,40,15,22,-20,20,0,30,30,-36,-39,0\nBeedrill,-45,10,-33,-40,-30,40,15,30,-20,30,0,-10,40,-36,-39,25\nPidgey,0,20,20,32,-18,17,32,39,-12,-20,-32,-22,-48,42,34,0\nPidgeotto,0,39,20,32,32,17,32,39,-12,20,-32,-32,30,22,10,0\nPidgeot,0,35,20,32,0,32,32,39,-12,0,-32,-35,0,22,34,0\nRattata,-40,-27,-33,-40,25,29,-29,-22,32,35,-37,38,42,-44,-40,0\nRaticate,-40,-17,-33,-40,25,29,-29,-22,32,35,-37,14,42,-44,-40,10\nSpearow,-42,-22,12,-31,-30,39,-32,-35,30,42,20,24,39,-32,-40,10\nFearow,-42,-22,12,-31,-30,39,10,0,25,42,20,24,20,-32,-40,0\nEkans,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nArbok,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nPikachu,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nRaichu,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nSandshrew,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nSandslash,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nNidoran (F),0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nNidorina,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nNidoqueen,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nNidoran (M),0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nNidorino,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nNidoking,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nClefairy,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nClefable,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nVulpix,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nNinetales,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nJigglypuff,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nWigglytuff,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nZubat,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nGolbat,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nOddish,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nGloom,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nVileplume,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nParas,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nParasect,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nVenonat,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nVenomoth,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nDiglett,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nDugtrio,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nMeowth,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nPersian,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nPsyduck,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nGolduck,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nMankey,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nPrimeape,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nGrowlithe,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nArcanine,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nPoliwag,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nPoliwhirl,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nPoliwrath,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nAbra,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nKadabra,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nAlakazam,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nMachop,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nMachoke,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nMachamp,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nBellsprout,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nWeepinbell,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nVictreebel,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nTentacrool,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nTentacruel,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nGeodude,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nGraveler,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nGolem,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nPonyta,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nRapidash,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nSlowpoke,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nSlowbro,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nMagnemite,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nMagneton,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nFarfetch'd,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nDoduo,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nDodrio,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nSeel,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nDewgong,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nGrimer,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nMuk,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nShellder,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nCloyster,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nGastly,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nHaunter,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nGengar,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nOnix,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nDrowzee,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nHypno,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nKrabby,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nKingler,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nVoltorb,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nElectrode,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nExeggcute,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nExeggutor,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nCubone,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nMarowak,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nHitmonlee,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nHitmonchan,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nLickitung,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nKoffing,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nWeezing,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nRhyhorn,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nRhydon,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nChansey,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nTangela,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nKangaskhan,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nHorsea,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nSeadra,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nGoldeen,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nSeaking,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nStaryu,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nStarmie,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nMr. Mime,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nScyther,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nJynx,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nElectabuzz,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nMagmar,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nPinsir,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nTauros,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nMagikarp,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nGyarados,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nLapras,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nDitto,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nEevee,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nVaporeon,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nJolteon,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nFlareon,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nPorygon,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nOmanyte,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nOmastar,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nKabuto,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nKabutops,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nAerodactyl,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nSnorlax,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nArticuno,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nZapdos,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nMoltres,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nDratini,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nDragonair,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nDragonite,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nMewtwo,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\nMew,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0";

var pokes_list = [];
var pokes_stats = [];
var lines = data_raw.split('\n');
for (var i = 0; i < lines.length; i++) {
    lines[i] = lines[i].split(',');
}

function arrange_data() {
    pokes_list = [];
    pokes_stats = [];
    for (var i = 0; i < lines.length; i++) {
        var nums = [];
        for (var j = 1; j < lines[i].length; j++) {
            nums.push(parseInt(lines[i][j]));
        }
        pokes_stats.push(nums);
        pokes_list.push(lines[i][0]);
    }
}

function get_poke_from_stats(stats) {
    arrange_data();
    var smallest_distance = -1;
    var smallest_name = 'empty';
    var dis = 0;
    var key;
    var value;
    for (var i = 0; i < pokes_list.length; i++) {
        key = pokes_list[i];
        value = pokes_stats[i];
        dis = 0;
        for (var j = 0; j < 16; j++) {
            dis += Math.pow(value[j] - stats[j], 2);
        }
        dis = Math.pow(dis, 0.5);
        if (dis < smallest_distance || smallest_distance === -1) {
            smallest_distance = dis;
            smallest_name = key;
        } else if (dis === smallest_distance) {
            var boo = Math.random() < 0.5;
            if (boo) {
                console.log('switched equal '+smallest_name+' to '+key);
                smallest_distance = dis;
                smallest_name = key;
            }
        }
    }
    return smallest_name
}