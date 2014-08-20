var Groupable = Ember.Mixin.create({
  group: null,
  ungroupedContent: null,

  groupedContent: function() {
    var model = this;
    var groupedContent = Ember.A([]);

    var groupCallback = this.get('group');
    var ungroupedContent = this.get('ungroupedContent');

    if (!groupCallback) return groupedContent;
    if (!ungroupedContent) return groupedContent;

    ungroupedContent.forEach(function(item) {
      var group = groupCallback.call(model, item);
      var groupKey = group.get('key');

      if (!groupKey) return;

      var foundGroup = groupedContent.findProperty('group.key', groupKey);

      if (!foundGroup) {
        foundGroup = groupedContent.pushObject(Ember.ArrayProxy.create({
          group: group,
          content: Ember.A([])
        }));
      }

      foundGroup.get('content').pushObject(item);
    });

    return groupedContent;
  }.property('group', 'ungroupedContent.@each')
});

export default Groupable;
