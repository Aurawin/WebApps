coATB.App.Components.PortfolioView = {
  Version        : new Version(2018,3,8,4),
  Title          : new Title("ATB PortfolioView","Portfolio"),
  Vendor         : new Vendor("Aurawin", "Copyright (&copy;) 2018.  All rights reserved.", [{'REAL-TIME END-USE AWARE INTERACTIVE SEARCH UTILIZING LAYERED APPROACH' : 7720843}, {'SYSTEMS AND APPARATUSES FOR SEAMLESS INTEGRATION OF USER, CONTEXTUAL, AND SOCIALLY AWARE SEARCH UTILIZING LAYERED APPROACH' : 7860852} ]),
  Header         : coAppKit.Dependencies.Create(coATB.App,'/atb/VPortfolio.js',coAppKit.PreLoaded),
  debugToConsole : true,
  glyphDelayFull : 5000,
  glyphMargin    : 50,

  Create : function(Parent){
    var Screen = Parent.Screen;
    var v=Parent.Slides.createSlide(
      "PortfolioView",
      Screen.Class+"PortfolioView",
      Screen,
      Parent,
      Parent.Container,
      coAppUI.Alignment.Client
    );
    v.Unit=this;
    v.clearContainerClass();
    v.Visibile=true;
    v.setTransparent(true);

    v.Slides.Elements=coAppUI.App.Components.Elements.Create(
        "Elements",
        "elmsPortfolio",
        Screen,
        v.Slides,
        v,
        v.Container,
        coAppUI.Alignment.Client
    );
    v.Slides.Elements.onResize=function(){
      var e = this;
      var dim = (coVDM.Orientation.Current==coVDM.Orientation.Landscape) ? this.Container.offsetHeight : this.Container.offsetWidth;
      e.setElementSpan(dim-coATB.App.Components.PortfolioView.glyphMargin);
    };
    v.Slides.Elements.Single=v.Slides.Elements.Items.Add(coAppUI.App.Components.Elements.Kind.Single);
    var el=v.Slides.Elements.Single.subItems[0];
    el.Glyphs.Delay=this.glyphDelayFull;
    el.addGlyph("/atb/Console.png","Native");
    el.addGlyph("/atb/NativeCMS.png","Native");
    el.addGlyph("/atb/Apps.png","Cloud");
    el.addGlyph("/atb/Cabinet.png","Cloud");
    el.addGlyph("/atb/CMS.png","Cloud");
    el.addGlyph("/atb/Email.png","Cloud");

    return v;
  }
};

