coATB.App.Components.BlogView = {
  Version        : new Version(2018,3,7,1),
  Title          : new Title("ATB BlogView","Blog"),
  Vendor         : new Vendor("Aurawin", "Copyright (&copy;) 2018.  All rights reserved.", [{'REAL-TIME END-USE AWARE INTERACTIVE SEARCH UTILIZING LAYERED APPROACH' : 7720843}, {'SYSTEMS AND APPARATUSES FOR SEAMLESS INTEGRATION OF USER, CONTEXTUAL, AND SOCIALLY AWARE SEARCH UTILIZING LAYERED APPROACH' : 7860852} ]),
  Header         : coAppKit.Dependencies.Create(coATB.App,'/atb/VBlog.js',coAppKit.PreLoaded),
  debugToConsole : true,
  Create : function(Parent){
    var Screen = Parent.Screen;
    var v=Parent.Slides.createSlide(
      "BlogView",
      Screen.Class+"BlogView",
      Screen,
      Parent,
      Parent.Container,
      coAppUI.Alignment.Client
    );
    v.Unit=this;
    v.clearContainerClass();
    v.Visibile=true;
    v.setTransparent(true);

    var cb = v.ContentBox=coAppUI.App.Components.ContentBox.Create(
      "ContentBox",
      "ContentBox",
      Screen,
      v.Slides,
      v,
      v.Container,
      coAppUI.Alignment.Client
    );
    //cb.setWidth(300);

    cb.setScale(1,1);
    cb.itemPadding.Top=4;
    cb.itemPadding.Left=4;
    cb.itemPadding.Right=4;
    cb.itemPadding.Bottom=4;

    cb.itemBorder.Top=2;
    cb.itemBorder.Left=2;
    cb.itemBorder.Right=2;
    cb.itemBorder.Bottom=2;

    cb.itemMargin.Top=10;
    cb.itemMargin.Left=10;
    cb.itemMargin.Right=10;
    cb.itemMargin.Bottom=10;

    cb.CMS.setURI("/atb/Blogs.xml");
    return v;
  }
};

