// Paste into a new Google Apps Script project and run setupSuggestions.
// Re-running in the same project reuses the created files.
function setupSuggestions() {
  const lock = LockService.getScriptLock();
  lock.waitLock(30000);
  try {
    const properties = PropertiesService.getScriptProperties();
    let formId = properties.getProperty("BEASTIE_FORM_ID");
    let sheetId = properties.getProperty("BEASTIE_SHEET_ID");
    const form = formId ? FormApp.openById(formId) : FormApp.create("Beastie Rap — suggest a rhyme");
    if (!formId) properties.setProperty("BEASTIE_FORM_ID", form.getId());
    const book = sheetId ? SpreadsheetApp.openById(sheetId) : SpreadsheetApp.create("Beastie Rap — rhyme suggestions");
    if (!sheetId) {
      properties.setProperty("BEASTIE_SHEET_ID", book.getId());
      const info = book.getSheets()[0];
      info.setName("Instructions");
      info.getRange("A1:A3").setValues([
        ["Review incoming suggestions in the Form Responses tab."],
        ["Add Review status and Notes beside responses if useful."],
        ["Suggestions do not enter the game until you approve and add them."]
      ]);
      info.setColumnWidth(1, 600);
      info.getRange("A1:A3").setWrap(true);
    }
    form.setDescription("Suggest one missing rhyme. Choose a game name and enter the word. No definition needed. Suggestions are reviewed before being added.");
    form.setCollectEmail(false);
    form.setLimitOneResponsePerUser(false);
    form.setPublishingSummary(false);
    form.setAllowResponseEdits(false);
    form.setShowLinkToRespondAgain(true);
    form.setConfirmationMessage("Thanks! Your rhyme is saved for review.");
    let nameItem = form.getItems(FormApp.ItemType.LIST).find(item => item.getTitle() === "Game name");
    nameItem = nameItem ? nameItem.asListItem() : form.addListItem().setTitle("Game name");
    nameItem.setChoiceValues(["Ace","Beau","Ben","Beth","Bill","Bo","Bob","Brad","Brent","Bruce","Cam","Carl","Chad","Charles","Chase","Chris","Chuck","Claire","Clark","Craig","Dan","Dane","Dave","Dawn","Doug","Drake","Drew","Earl","Ed","Frank","Fred","George","Glen","Grace","Grant","Greg","Hank","Heath","Ike","Jack","Jake","James","Jane","Jean","Jeff","Jenn","Jess","Jim","Jo","Joe","John","Josh","Joy","Keith","Ken","Kim","Kyle","Lane","Liz","Lou","Lyle","Mark","Meg","Mike","Ned","Pam","Pat","Paul","Peg","Ralph","Rob","Ross","Roy","Ruth","Sam","Saul","Scott","Seth","Shane","Shawn","Stan","Steve","Sue","Tad","Ted","Trent","Van","Vince","Walt","Wayne","Will"]).setRequired(true);
    let wordItem = form.getItems(FormApp.ItemType.TEXT).find(item => item.getTitle() === "Missing rhyme");
    wordItem = wordItem ? wordItem.asTextItem() : form.addTextItem().setTitle("Missing rhyme");
    wordItem.setRequired(true).setHelpText("Just the word or short phrase, for example Grew.");
    wordItem.setValidation(FormApp.createTextValidation()
      .requireTextLengthLessThanOrEqualTo(80)
      .setHelpText("Please keep the rhyme under 80 characters.").build());
    if (form.getDestinationId() !== book.getId()) {
      form.setDestination(FormApp.DestinationType.SPREADSHEET, book.getId());
    }
    if (form.supportsAdvancedResponderPermissions()) form.setPublished(true);
    form.setAcceptingResponses(true);
    // Creates a prefilled link, NOT a submitted response.
    const prefilled = form.createResponse()
      .withItemResponse(nameItem.createResponse("Lou")).toPrefilledUrl();
    console.log("RESPONSE SHEET: " + book.getUrl());
    console.log("EDIT FORM: " + form.getEditUrl());
    console.log("SEND THIS LINK BACK TO CHATGPT: " + prefilled);
  } finally {
    lock.releaseLock();
  }
}
