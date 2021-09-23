//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here

function createManager(managerName, managerAge, currentTeam, trophiesWon)
{
  var mgd=[managerName, managerAge, currentTeam, trophiesWon];
  return mgd;
}

// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here

function createFormation(frm)
{
  if (frm.length === 0)
  {
    return null;
  }
  var cf =
  {
    defender : frm[0],
    midfield : frm[1],
    forward  : frm[2]
  }
  return cf;
}

// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year

function filterByDebut(year)
{
  var fbd = [];
  var s = 0;
  for(let i = 0; i < players.length; i++)
  {
    if(players[i]["debut"] === year)
    {
      fbd[s] = players[i];
      s = s+1;
    }
  }
  return fbd;
}

//Progression 4 - Filter players that play at the position _______

function filterByPosition(position)
{
  var fbp = [];
  var s = 0;
  for(let i = 0; i < players.length; i++)
  {
    if(players[i]["position"] === position)
    {
      fbp[s]=players[i];
      s=s+1;
    }
  }
  return fbp;
}

//Progression 5 - Filter players that have won ______ award

function filterByAward(awardName)
{
  var fba = [];
  var s = 0;
  for(let i = 0; i < players.length; i++)
  {
    for(let j = 0; j < players[i]["awards"].length; j++)
    if(players[i]["awards"][j]["name"] === awardName)
    {
      fba[s]=players[i];
      s=s+1;
    }
  }
  return fba;
}

//Progression 6 - Filter players that won ______ award ____ times

function filterByAwardxTimes(awardName, noOfTimes)
{
  var fbat = [];
  var s = 0;
  for(let i=0; i<players.length; i++)
  {
    var k = 0;
    for(let j=0; j<players[i]["awards"].length; j++)
    {
      if(players[i]["awards"][j]["name"] === awardName)
      {
        k = k+1;
      }
    }
    if(k === noOfTimes)
    {
      fbat[s]=players[i];
      s = s+1;
    }
  }
  return fbat;
}

//Progression 7 - Filter players that won ______ award and belong to ______ country

function filterByAwardxCountry(awardName, country)
{
  var fbac = [];
  var s = 0;
  for(let i=0; i<players.length; i++)
  {
    var k = 0;
    for(let j=0; j<players[i]["awards"].length; j++)
    {
      if(players[i]["awards"][j]["name"] === awardName)
      {
        k = k+1;
      }
    }
    if(k != 0 && players[i]["country"] === country)
    {
      fbac[s]=players[i];
      s = s+1;
    }
  }
  return fbac;
}

//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____

function filterByNoOfAwardsxTeamxAge(noOfAwards, team, age)
{
  var fbata = [];
  var s = 0;
  for(let i=0; i<players.length; i++)
  {
    if(players[i]["awards"].length >= noOfAwards && players[i]["team"] === team && players[i]["age"] < age)
    {
      fbata[s]=players[i];
      s = s+1;
    }
  }
  return fbata;
}

//Progression 9 - Sort players in descending order of their age

function SortByAge()
{
  var sbg = [];
  for(let i=0; i<players.length; i++)
  {
    sbg[i] = players[i];
  }
  for(let j=0; j<sbg.length; j++)
  {
    for(let k=0; k<sbg.length-j-1; k++)
    {
      if(sbg[k]["age"] < sbg[k+1]["age"])
      {
      let t = sbg[j];
      sbg[j]=sbg[k];
      sbg[k]=t;
      }
    }
  }
  return sbg;
}

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

function FilterByTeamxSortByNoOfAwards(team)
{
  var fbtsbna = [];
  for(let i=0; i<players.length; i++)
  {
    fbtsbna[i] = players[i];
  }
  for(let j=0; j<fbtsbna.length; j++)
  {
    for(let k=0; k<fbtsbna.length-j-1; k++)
    {
      if(fbtsbna[k]["team"] === team)
      {
        if(fbtsbna[k]["awards"].length < fbtsbna[k+1]["awards"].length)
        {
          let t = fbtsbna[j];
          fbtsbna[j]=fbtsbna[k];
          fbtsbna[k]=t;
        }
      }
    }
  }
  return arr;
}

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

function SortByNamexAwardxTimes(awardName, noOfTimes, country)
{
  let sbnat = [];
  for(let i=0; i<players.length; i++)
  {
    if(players[i]["country"] === country)
    {
      let k = 0;
      for(let j=0; j<players[i]["awards"].length; j++)
      {
        if(players[j]["awards"]["name"] === awardName)
        {
          k = k+1;
        }
      }
      if(k === noOfTimes)
      {
        sbnat[i]=players[i];
      }
    }
  }
  sbnat.sort(function(x, y)
  {
      if(x.name < y.name) { return -1; }
      if(x.name > y.name) { return 1; }
      return 0;
  })
  return sbnat;
}

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order

function SortByNamexOlderThan(age)
{
  let sbnot = [];
  for(let i=0; i<players.length; i++)
  {
    if(players[i]["age"] > age)
    {
      sbnot[i] = players[i];
    }
  }
  for(let j=0; j<sbnot.length; j++)
  {
    for(let k=0; k<sbnot[j]["awards"].length; k++)
    {
      for(let l=0; l<sbnot[j]["awards"].length-k-1; l++)
      {
        if(arr[j]["awards"][l]["year"] > arr[j]["awards"][l+1]["year"])
        {
          let t = sbnot[j]["awards"][k];
          sbnot[j]["awards"][l] = sbnot[j]["awards"][k];
          sbnot[j]["awards"][k] = t;
        }
      }
    }
  }
  return sbnot;
}


