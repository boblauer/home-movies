var MovieModel = DS.Model.extend({
  title: DS.attr('string'),
  year: function() {
    return this.get('title').split(' - ')[0];
  }.property('title'),
  name: function() {
    return this.get('title').split(' - ')[1];
  }.property('title')
});

MovieModel.reopenClass({
  FIXTURES: [
    { title: '1986 - Beth & Bobby singing Rainbow Connection', id: 'mWF2WemYgfw' },
    { title: '1986 - Beth and Joey dancing', id: 'zxaR7KVJzjI' },
    { title: '1986 - Bobby and Dana talking at dinner in WI', id: 'ymUfZIwonj8' },
    { title: '1986 - Bobby locked out', id: 'ecWVTs-B8kM' },
    { title: '1986 - Bobby playing soccer in the backyard', id: '39cU_Ha_HLY' },
    { title: '1986 - Dad skiing, Mom torpedoing', id: '5ZwAsuYPKL8' },
    { title: '1986 - Dad, Joey, & Bobby wrestling', id: 'jGCEYibEw0I' },
    { title: '1986 - Ferrini Christmas Party', id: 'PqCb8kqRwZk' },
    { title: '1986 - Joey fishing', id: 'x33TFD7Ee-I' },
    { title: '1986 - Joey trying to ski', id: '2pB1Ml43pKg' },
    { title: '1986 - Kids playing in the boat', id: 'peGV3GFAYJU' },
    { title: '1986 - Mark & Jennifer\'s Wedding', id: 'eMivZwmfZyk' },
    { title: '1986 - Nonna\'s Surprise Birthday Party (what year?)', id: 'PFvVFZOe0m8' },
    { title: '1986 - Paul doing magic', id: 'mMAzjelDFUU' },
    { title: '1986 - Paul helping kids with fishing poles', id: 'E5-ASkwi6b4' },
    { title: '1986 - Pepperoncini', id: 'u9O1lN5KnzU' },
    { title: '1986 - Playing with chipmunks in WI', id: 'ilHrjxgQzP4' },
    { title: '1986 - Relay races in WI', id: '9tV3aCEdFLc' },
    { title: '1987 - Beth reading Where the Sidewalk Ends', id: 'TmcUw-17M6g' },
    { title: '1987 - Beth, Joey, Bobby, and Annie dancing', id: 'R2dPaUpSpFY' },
    { title: '1987 - Bobby & Dana taking a bath', id: 'iSKTf4Gzmkc' },
    { title: '1987 - Bobby, Joey, & Jason Stemple playing football', id: '_vBi2Gi8H8g' },
    { title: '1987 - Bobbys 3rd Birthday Party', id: 'iI64f66O-tM' },
    { title: '1987 - Dad practicing his golf swing', id: 'ojEmG0qYSrI' },
    { title: '1987 - Danas 2nd Birthday party', id: 'xjaaQrwzzMc' },
    { title: '1987 - Easter egg hunt', id: 'MIu0k5Hsajk' },
    { title: '1987 - Good Neighbor Day Parade', id: 'EX6ofgFplPw' },
    { title: '1987 - Joey losing a tooth', id: 'cWXbcilnf-c' },
    { title: '1987 - Koch Easter party', id: 'DEQ8yA01gpc' },
    { title: '1987 - Lauer Xmas Party', id: 'bmOPmDevbdE' },
    { title: '1987 - Mom & Joey playing ping pong', id: 'YsAAY-edSGI' },
    { title: '1987 - Mom, Dad, Joey, & Bobby driving to WI', id: 'mDoV26YrryE' },
    { title: '1987 - Papa and kids playing on MJ & Paul\'s treehouse', id: 'snWXcSBRNR0' },
    { title: '1987 - Papa at Indi 500 time trials', id: '6NG5OwSwan8' },
    { title: '1987 - Playing in the snow', id: 'hZMm9RBPEO0' },
    { title: '1987 - Skiing, torpedoing, fishing, etc', id: 'FzWdrPUx-R0' },
    { title: '1988 - Beth\'s 1st Communion & Party', id: 'zKNn1cRPQ6c' },
    { title: '1988 - Coloring Easter eggs', id: 'LuKwz3TiSRs' },
    { title: '1988 - Easter morning', id: '6hIuZO5R5So' },
    { title: '1988 - Jerry Castle\'s Surprise 70th Birthday Party', id: 'PEKCzgWOwOA' },
    { title: '1988 - Joey & Jason Stemple playing basketball', id: 'bU3sPe2WK7c' },
    { title: '1988 - Joey Skiing', id: 'AB3BdCXTIeg' },
    { title: '1988 - Kids playing with Tootsie', id: 'Bv7LXTH4AMM' },
    { title: '1988 - Kids swimming in WI', id: 'NG5Qxw4m49k' },
    { title: '1988 - Mr Getch opening birthday presents', id: '3paefm2Jxdk' },
    { title: '1989 - 4th of July Party', id: 'WGiiMJjY2R4' },
    { title: '1989 - Bald eagle by the water', id: 'YgAD6chc_mc' },
    { title: '1989 - Bill Kalleys\' gigantic fish', id: '5mbxmuHDPB8' },
    { title: '1989 - Bobby & Joey recapping their day in WI', id: '5ZZ_RksFxVg' },
    { title: '1989 - Bobby dancing with a sock in WI', id: 'cThhuD4rM-Q' },
    { title: '1989 - Ducks down by the water', id: 'OOECv0o4gYs' },
    { title: '1989 - Everyone down by the water', id: 'IPISX5LWEsg' },
    { title: '1989 - Joey trying to ski', id: 'wLSYO_lWrcA' },
    { title: '1989 - Kids fishing', id: '9AG7lmc_0J4' },
    // { title: '1989 - Paul modeling his church apparel', id: 'mFervK-LG7E' },
    { title: '1989 - Paul saying grace in WI', id: 'ZkDb0js3y_g' },
    { title: '1989 - Ride up to WI', id: 'heS4BRHxnoc' },
    { title: '1989 - Sunset in WI', id: 'HrLXsAfVTnI' },
    { title: '1989 - The Oxbo', id: '_5flMwoJ7f4' },
    { title: '1989 - Tootsie with a pacifier in WI', id: 'IbFBm3aC4DQ' }
  ]
});

export default MovieModel;
