module.exports = {
  content: 'Example',
  children: [{
    content: 'one'
  }, {
    content: 'two',
    children: [{
      content: 'three'
    }]
  }]
}

for (var i = 0; i < 10; i++) {
  var x = {
    content: 'parent ' + i,
    children: []
  }
  for (var j = 0; j < 10; j++) {
    x.children.push({
      content: 'j ' + i + ' : ' + j
    })
  }
  module.exports.children.push(x)
}

var demoData = {
  "meta": {},
  "content": "Home",
  "children": [{
    "meta": {},
    "content": "Animals",
    "type": "base",
    "children": [{
      "meta": {},
      "content": "Monkeys",
      "type": "base",
      "attributes": [{
        "name": "Assignee",
        "value": "ZI"
      }, {
        "name": "World",
        "value": "Hello"
      }]
    }, {
      "meta": {},
      "content": "Marmalutes",
      "type": "base",
      "attributes": [{
        "name": "Assignee",
        "value": "ZI"
      }, {
        "name": "World",
        "value": "Hello"
      }]
    }, {
      "meta": {},
      "content": "Marsupials",
      "type": "base",
      "attributes": [{
        "name": "Assignee",
        "value": "ZI"
      }, {
        "name": "World",
        "value": "Hello"
      }]
    }, {
      "meta": {},
      "content": "Meercats",
      "type": "base",
      "attributes": [{
        "name": "Assignee",
        "value": "ZI"
      }, {
        "name": "World",
        "value": "Hello"
      }]
    }, {
      "meta": {},
      "content": "Moose",
      "type": "todo",
      "done": false
    }, {
      "meta": {},
      "content": "Mice",
      "type": "base",
      "attributes": [{
        "name": "Assignee",
        "value": "ZI"
      }, {
        "name": "World",
        "value": "Hello"
      }]
    }],
    "collapsed": true
  }, {
    "meta": {},
    "content": "Vegetables",
    "type": "base",
    "children": [{
      "meta": {},
      "content": "Trees",
      "type": "base",
      "attributes": [{
        "name": "Assignee",
        "value": "ZI"
      }, {
        "name": "World",
        "value": "Hello"
      }]

    }, {
      "meta": {},
      "content": "Ferns",
      "type": "base",
      "attributes": [{
        "name": "Assignee",
        "value": "ZI"
      }, {
        "name": "World",
        "value": "Hello"
      }]

    }, {
      "meta": {},
      "content": "Flowers",
      "type": "base",
      "attributes": [{
        "name": "Assignee",
        "value": "ZI"
      }, {
        "name": "World",
        "value": "Hello"
      }]

    }, {
      "meta": {},
      "content": "Grass",
      "type": "base",
      "attributes": [{
        "name": "Assignee",
        "value": "ZI"
      }, {
        "name": "World",
        "value": "Hello"
      }]

    }, {
      "meta": {},
      "content": "Water Lilies",
      "type": "base",
      "attributes": [{
        "name": "Assignee",
        "value": "ZI"
      }, {
        "name": "World",
        "value": "Hello"
      }]

    }, {
      "meta": {},
      "content": "Plums",
      "type": "base"
    }, {
      "meta": {},
      "content": "Canteloup",
      "type": "base",
      "attributes": [{
        "name": "Assignee",
        "value": "ZI"
      }, {
        "name": "World",
        "value": "Hello"
      }]

    }, {
      "meta": {},
      "content": "Cabbage",
      "type": "base",
      "attributes": [{
        "name": "Assignee",
        "value": "ZI"
      }, {
        "name": "World",
        "value": "Hello"
      }]

    }, {
      "meta": {},
      "content": "Capers",
      "type": "base",
      "attributes": [{
        "name": "Assignee",
        "value": "ZI"
      }, {
        "name": "World",
        "value": "Hello"
      }]

    }, {
      "meta": {},
      "content": "Carrots",
      "type": "base",
      "attributes": [{
        "name": "Assignee",
        "value": "ZI"
      }, {
        "name": "World",
        "value": "Hello"
      }]

    }, {
      "meta": {},
      "content": "Camomile",
      "type": "base",
      "attributes": [{
        "name": "Assignee",
        "value": "ZI"
      }, {
        "name": "World",
        "value": "Hello"
      }]

    }],
    "collapsed": true
  }, {
    "meta": {},
    "content": "Minerals",
    "type": "base",
    "children": [{
      "meta": {},
      "content": "Granite",
      "type": "base"
    }, {
      "meta": {},
      "content": "Pummus",
      "type": "base"
    }],
    "collapsed": true
  }, {
    "meta": {},
    "content": "Planets",
    "type": "base",
    "children": [{
      "meta": {},
      "content": "Mercury",
      "type": "base"
    }, {
      "meta": {},
      "content": "Venus",
      "type": "base"
    }, {
      "meta": {},
      "content": "Earth",
      "type": "base"
    }, {
      "meta": {},
      "content": "Mars",
      "type": "base"
    }, {
      "meta": {},
      "content": "Jupiter",
      "type": "base"
    }, {
      "meta": {},
      "content": "Saturn",
      "type": "base"
    }, {
      "meta": {},
      "content": "Uranus",
      "type": "base"
    }, {
      "meta": {},
      "content": "Neptune",
      "type": "base"
    }],
    "collapsed": true
  }],
  "collapsed": false
}

if (location.hash === '#real') {
  module.exports = demoData
}
