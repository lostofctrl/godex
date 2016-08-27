/*
  appraise.js
  calculate iv's! maybe? idk.
  Credit to:
  https://github.com/andromedado/pokemon-go-iv-calculator/
*/

var appraise = function(opt) {
  var atkIV, defIV, staIV,
    hpIVs = [], potential = [], result = {};

  // Testing functions
  var testHP = function(hp, iv, lvl, mon) {
    return hp == parseInt(Math.floor((mon.stats.stamina + iv) * lvl.cpm), 10);
  };

  var testCP = function(cp, atkIV, defIV, staIV, lvl, mon) {
    var attack = mon.stats.attack + atkIV,
      defense = Math.pow(mon.stats.defense + defIV, 0.5),
      stamina = Math.pow(mon.stats.stamina + staIV, 0.5),
      scale = Math.pow(lvl.cpm, 2);
    return cp == parseInt(attack * defense * stamina * scale / 10, 10);
  };

  var reappraise = function(o) {
    if (!o.atk && !o.def && !o.sta) {
      return true;
    } else if (o.atk && !o.def && !o.sta) {
      return (o.atkIV > o.defIV && o.atkIV > o.staIV);
    } else if (!o.atk && o.def && !o.sta) {
      return (o.defIV > o.atkIV && o.defIV > o.staIV);
    } else if (!o.atk && !o.def && o.sta) {
      return (o.staIV > o.atkIV && o.staIV > o.defIV);
    } else if (o.atk && o.def && !o.sta) {
      return (o.atkIV == o.defIV && o.atkIV > o.staIV);
    } else if (o.atk && !o.def && o.sta) {
      return (o.atkIV == o.staIV && o.atkIV > o.defIV);
    } else if (!o.atk && o.def && o.sta) {
      return (o.defIV == o.staIV && o.defIV > o.atkIV);
    } else if (o.atk && o.def && o.sta) {
      return (o.atkIV == o.defIV && o.atkIV == o.staIV);
    }
  };

  var howPerf = function(ivs) {
    var perf = (ivs.atk + ivs.def + ivs.sta) / 45;
    return Math.floor(perf * 100);
  };

  var grade = function(ivs) {
    var grades = {}, toGrade = [],
      add = function(a,b) {
        return a + b;
      };
    if (ivs.length) {
      grades.min = ivs[0].perf;
      grades.max = ivs[0].perf;
      for (var _g = 0;_g < ivs.length;_g++) {
        toGrade.push(ivs[_g].perf);
        if (ivs[_g].perf > grades.max) grades.max = ivs[_g].perf;
        if (ivs[_g].perf < grades.min) grades.min = ivs[_g].perf;
      }
      grades.avg = toGrade.reduce(add, 0) / toGrade.length;
    }
    return grades;
  };

  if (!opt.powered) {
    // If never upgraded, remove half levels
    for (var _l in opt.levels) {
      if (opt.levels[_l].key.toString().indexOf(".5") > -1) delete opt.levels[_l];
    }
  }

  for (var _level in opt.levels) {
    var _lData = opt.levels[_level];
    for (staIV = 0;staIV <= 15;staIV++) {
      if (testHP(opt.hp, staIV, _lData, opt.pokemon)) {
        hpIVs.push({
          level: _lData.key,
          lvl: _lData,
          iv: staIV
        });
      }
    }
  }

  for (var _h = 0;_h < hpIVs.length;_h++) {
    var _hData = hpIVs[_h];
    staIV = _hData.iv;
    for (atkIV = 0;atkIV <= 15;atkIV++) {
      for (defIV = 0;defIV <= 15;defIV++) {
        if (testCP(opt.cp, atkIV, defIV, staIV, _hData.lvl, opt.pokemon)) {
          if (reappraise({
              atk: opt.strongAtk,
              def: opt.strongDef,
              sta: opt.strongHP,
              atkIV: atkIV,
              defIV: defIV,
              staIV: staIV
            })) {
            potential.push({
              atk: atkIV,
              def: defIV,
              sta: staIV,
              lvl: _hData.level
            });
          }
        }
      }
    }
  }

  for (var _iv = 0;_iv < potential.length;_iv++) {
    potential[_iv].perf = howPerf(potential[_iv]);
  }

  potential.sort(function(a,b) {
    if (a.perf == b.perf) return 0;
    return a.perf > b.perf ? 1 : -1;
  });

  result.ivs = potential;
  result.grade = grade(potential);

  return result;
};
