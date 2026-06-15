var index = new FlexSearch.Document({
  tokenize: "forward",
  cache: 100,
  document: {
    id: "id",
    tag: "tag",
    index: ["title", "content", "description"],
    store: ["title", "href", "description"]
  }
});

export default index;