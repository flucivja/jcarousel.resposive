(function($) {
    'use strict';

    $.jCarousel.plugin('jcarouselResponsive', {
        _options: {
            tresholds: {
              desktop: [979, Infinity],
              tablet:  [768, 978],
              phone:   [568, 767],
              sphone:  [0  , 568]
            },
            desktop: 5,
            tablet:  3,
            phone:   2,
            sphone:  2,
            margin: 14
        },
        _init: function() {
            this.onDestroy = $.proxy(function() {
                this._destroy();
                this.carousel()
                    .one('jcarousel:createend', $.proxy(this._create, this));
            }, this);
            this.onReload = $.proxy(this._reload, this);
        },
        _create: function() {
            this.carousel()
                .one('jcarousel:destroy', this.onDestroy)
                .on('jcarousel:reload', this.onReload);
            this._reload();
        },      
        _destroy: function() {
            this._clear();
            this.carousel()
                .off('jcarousel:destroy', this.onDestroy)
                .off('jcarousel:reload', this.onReload);
        },
        _reload: function() {
            var windowWidth = window.innerWidth,
                tresholds = this._options.tresholds;
		
            if(windowWidth >= tresholds.desktop[0] && windowWidth <= tresholds.desktop[1]) {
				this._responsive(this._options.desktop);
            } else if(windowWidth >= tresholds.tablet[0] && windowWidth <= tresholds.tablet[1]) {
				this._responsive(this._options.tablet);
            } else if(windowWidth >= tresholds.phone[0] && windowWidth <= tresholds.phone[1]) {
				this._responsive(this._options.phone);
            } else if(windowWidth >= tresholds.sphone[0] && windowWidth <= tresholds.sphone[1]) {
				this._responsive(this._options.sphone);
            }            
        },
        _responsive: function(numberOfVisibleItems) {
            var carousel    = this.carousel().data('jcarousel'),
                parent      = this._element,
                items       = carousel._items,
                list        = carousel._list,
                layout      = ( 'layout-' + numberOfVisibleItems ),
                dataLayout  = ( parent.data('layout') || 'null' ),
                margin      = this._options.margin,
                listWidth, itemWidth;
          
            // clear responsive styles
            if(numberOfVisibleItems === -1) {
                this._clear(); 
                return false;
            }
          
            if(dataLayout !== layout ) {
                parent.removeClass(dataLayout).addClass(layout).data('layout', layout);
            }
            
            listWidth = parent.width();
            itemWidth = (listWidth / numberOfVisibleItems);
            
            items.css({'width'      : itemWidth - margin + (numberOfVisibleItems === items.length ? margin / (items.length - 1) : 0), 
                       'marginLeft' : margin / 2,
                       'marginRight': margin / 2});
            if(numberOfVisibleItems === items.length) {
                items.eq(0).css({'marginLeft' : 0});
                items.eq(items.length - 1).css( {'marginRight' : 0});
            }    
            list.css({'width' : ((itemWidth + margin) * items.length)});
        },
        _clear: function() {
            var carousel = this.carousel().data('jcarousel');
            carousel._items.removeAttr('style');
            carousel._list.removeAttr('style');
        }
    });
}(jQuery));
