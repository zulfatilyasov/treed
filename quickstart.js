var React = require('react')
  , Treed = require('./classy')
  , ListView = require('./views/list')
  , extend = require('./util/extend')

module.exports = Treed
window.Treed = Treed;

Treed.prototype.quickstart = function (el, options) {
  options = options || {}

  el = ensureElement(el)

  this.keyManager.listen(window)

  return this.initStore(options.data || {content: ''}, {
    actions: options.actions || require('./views/list/actions'),
  }).then(() => {
    
  }).catch(error => {
    console.warn('Treed initialization failed!', error)
    throw error
  });
}

Treed.prototype.startView = function (el, options) {
  options = options || {}
  var viewOptions = extend({
    keys: options.keys || ListView.keys,
  }, options.viewOptions)
  var View = options.View || ListView
    , props = this.addView(viewOptions)

  return <View {...props}/>;

    // React.render(<View {...props}/>, el, function (err) {
    //   if (err) return reject(err)
    //   resolve(props.store)
    // })
}

function ensureElement(el) {
  if ('string' === typeof el) {
    var found = document.querySelector(el)
    // if (!found) throw new Error('element not found: ' + el)
    el = found
  }
  return el
}

