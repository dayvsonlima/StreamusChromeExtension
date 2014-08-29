﻿define([
    'background/enum/syncActionType',
    'common/enum/listItemType'
], function (SyncActionType, ListItemType) {
    'use strict';

    var SyncAction = Backbone.Model.extend({
        defaults: function () {
            return {
                listItemType: ListItemType.None,
                actionType: SyncActionType.None,

                modelId: '',
                //  Only defined if ListItemType is PlaylistItem
                modelParentId: '',
                
                //  Only defined if ActionType is Added
                modelAttributes: {   
                },
                
                //  Only defined if ActionType is PropertyChanged
                property: {
                    name: '',
                    value: null
                }
            };
        }
    });

    return SyncAction;
});