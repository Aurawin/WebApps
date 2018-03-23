coATB.App.Components.MainView = {
  Version        : new Version(2018,3,23,6),
  Title          : new Title("ATB MainView","Main"),
  Vendor         : new Vendor("Aurawin", "Copyright (&copy;) 2018.  All rights reserved.", [{'REAL-TIME END-USE AWARE INTERACTIVE SEARCH UTILIZING LAYERED APPROACH' : 7720843}, {'SYSTEMS AND APPARATUSES FOR SEAMLESS INTEGRATION OF USER, CONTEXTUAL, AND SOCIALLY AWARE SEARCH UTILIZING LAYERED APPROACH' : 7860852} ]),
  Header         : coAppKit.Dependencies.Create(coATB.App,'/atb/VMain.js',coAppKit.PreLoaded),
  debugToConsole : true,
  Create : function(Parent){
    var Screen = Parent.Screen;
    var v=Parent.Slides.View=Parent.Slides.createSlide(
      "MainView",
      Screen.Class+"MainView",
      Screen,
      Parent,
      Parent.Container,
      coAppUI.Alignment.Client
    );
    v.Unit=this;
    v.clearContainerClass();
    v.Visibile=true;
    v.setTransparent(true);
    v.setHeight(coATB.largeImage);

    v.Showcase=coAppUI.App.Components.ShowCase.Create(
      "Showcase",
      v.Class,
      Screen,
      v.Slides,
      v,
      v.Container,
      coAppUI.Alignment.Client
    );
    v.Showcase.clearContainerClass();
    v.Showcase.setHeight(250);
    v.Showcase.Visible=true;


    v.Showcase.PageItemPosition=coAppUI.Absolute;
    v.Showcase.PageClientPosition=coAppUI.Relative;
    v.Showcase.PageContentPosition=coAppUI.Absolute;
    v.Showcase.Buttons.placeTopCenterInside();

    var sci=v.Showcase.Items.Face=v.Showcase.Items.addItem();
    sci.Category="Me";
    sci.Button.setCaption("Intro");
    sci.Image = coAppUI.App.Components.Image.Create(
      "Image",
      v.Class+"Image",
      Screen,
      sci.Page.Slides,
      sci.Page,
      sci.Page.Content,
      coAppUI.Alignment.Left
    );
    sci.Image.clearContainerClass();
    sci.Image.Visible=true;
    sci.Image.setWidth((coVDM.Display.Small)? coATB.smallImage : coATB.largeImage );
    sci.Bio=coAppUI.App.Components.ContentBox.Create(
         "Bio",
         "BioContentBox",
         Screen,
         sci.Page.Slides,
         sci.Page,
         sci.Page.Content,
         coAppUI.Alignment.Client
    );

    sci.Bio.setScale(1,1);
    sci.Bio.itemPadding.Top=4;
    sci.Bio.itemPadding.Left=4;
    sci.Bio.itemPadding.Right=4;
    sci.Bio.itemPadding.Bottom=4;

    sci.Bio.itemBorder.Top=2;
    sci.Bio.itemBorder.Left=2;
    sci.Bio.itemBorder.Right=2;
    sci.Bio.itemBorder.Bottom=2;

    sci.Bio.itemMargin.Top=10;
    sci.Bio.itemMargin.Left=10;
    sci.Bio.itemMargin.Right=10;
    sci.Bio.itemMargin.Bottom=10;
    sci.Bio.CMS.setURI("/atb/Bio.xml");


    var sci=v.Showcase.Items.Blog=v.Showcase.Items.addItem();
    sci.Category="My Blog";
    sci.Button.setCaption("Blog");
    sci.Blog=coATB.App.Components.BlogView.Create(sci.Page);

    var sci=v.Showcase.Items.Portfolio=v.Showcase.Items.addItem();
    sci.Category="My Portfolio";
    sci.Button.setCaption("Portfolio");
    sci.Portfolio=coATB.App.Components.PortfolioView.Create(sci.Page);

    v.onResize=function(){
      var sci = this.Showcase.Items.Face;
      if (coVDM.Display.Small){
        if (sci.Image.Visible){
          sci.Image.Visible=false;
          sci.Image.Conseal();
        };
      } else {
        if (!sci.Image.Visible){
          sci.Image.setWidth(coATB.largeImage);
          sci.Image.Visible=true;
          sci.Image.Reveal();
        };
      };

    };

    return v;
  }
};

