console.log("Start Amazon test");
WUnit.test("wNodeSimilarity", function(assert) {
    var THRESHOLDS = Webdext.Similarity.THRESHOLDS,
        wNodeSimilarity = Webdext.Similarity.wNodeSimilarity;

    var wTree = Webdext.Model.createWTree();

    var titleNode1 = Webdext.evaluateXPath(
        '//*[@id="result_0"]/div/div/div/div[2]/div[2]/a/h2/text()[1]'
    )[0];
    var wTitleNode1 = Webdext.Model.findWNode(titleNode1, wTree);
    var titleNode2 = Webdext.evaluateXPath(
        '//*[@id="result_1"]/div/div/div/div[2]/div[2]/a/h2/text()[1]'
    )[0];
    var wTitleNode2 = Webdext.Model.findWNode(titleNode2, wTree);

    var authorNode1 = Webdext.evaluateXPath(
        '//*[@id="result_0"]/div/div/div/div[2]/div[2]/div/span[2]/a/text()[1]'
    )[0];
    var wAuthorNode1 = Webdext.Model.findWNode(authorNode1, wTree);
    var authorNode2 = Webdext.evaluateXPath(
        '//*[@id="result_1"]/div/div/div/div[2]/div[2]/div/span[2]/a/text()[1]'
    )[0];
    var wAuthorNode2 = Webdext.Model.findWNode(authorNode2, wTree);

    var priceNode1 = Webdext.evaluateXPath(
        '//*[@id="result_0"]/div/div/div/div[2]/div[3]/div[1]/div[2]/a/span/text()[1]'
    )[0];
    var wPriceNode1 = Webdext.Model.findWNode(priceNode1, wTree);
    var priceNode2 = Webdext.evaluateXPath(
        '//*[@id="result_1"]/div/div/div/div[2]/div[3]/div[1]/div[2]/a/span/text()[1]'
    )[0];
    var wPriceNode2 = Webdext.Model.findWNode(priceNode2, wTree);

    var titleLinkNode1 = Webdext.evaluateXPath(
        '//*[@id="result_0"]/div/div/div/div[2]/div[2]/a[1]'
    )[0];
    var wTitleLinkNode1 = Webdext.Model.findWNode(titleLinkNode1, wTree).children[0];
    var titleLinkNode2 = Webdext.evaluateXPath(
        '//*[@id="result_1"]/div/div/div/div[2]/div[2]/a[1]'
    )[0];
    var wTitleLinkNode2 = Webdext.Model.findWNode(titleLinkNode2, wTree).children[0];

    var authorLinkNode1 = Webdext.evaluateXPath(
        '//*[@id="result_0"]/div/div/div/div[2]/div[2]/div/span[2]/a[1]'
    )[0];
    var wAuthorLinkNode1 = Webdext.Model.findWNode(authorLinkNode1, wTree).children[0];
    var authorLinkNode2 = Webdext.evaluateXPath(
        '//*[@id="result_1"]/div/div/div/div[2]/div[2]/div/span[2]/a[1]'
    )[0];
    var wAuthorLinkNode2 = Webdext.Model.findWNode(authorLinkNode2, wTree).children[0];

    var productThumbnailNode1 = Webdext.evaluateXPath(
        '//*[@id="result_0"]/div/div/div/div[1]/div/div/a/img[1]'
    )[0];
    var wProductThumbnailNode1 = Webdext.Model.findWNode(productThumbnailNode1, wTree);
    var productThumbnailNode2 = Webdext.evaluateXPath(
        '//*[@id="result_1"]/div/div/div/div[1]/div/div/a/img[1]'
    )[0];
    var wProductThumbnailNode2 = Webdext.Model.findWNode(productThumbnailNode2, wTree);

    var otherImageNode = Webdext.evaluateXPath(
        '//*[@id="anonCarousel1"]/ol/li[1]/div/a/div/img'
    )[0];
    var wOtherImageNode = Webdext.Model.findWNode(otherImageNode, wTree);

    assert.ok(
        wNodeSimilarity(wTitleNode1, wTitleNode2) > THRESHOLDS.TEXT_NODE,
        "wNodeSimilarity(wTitleNode1, wTitleNode2) > THRESHOLDS.TEXT_NODE"
    );
    assert.ok(
        wNodeSimilarity(wAuthorNode1, wAuthorNode2) > THRESHOLDS.TEXT_NODE,
        "wNodeSimilarity(wAuthorNode1, wAuthorNode2) > THRESHOLDS.TEXT_NODE"
    );
    assert.ok(
        wNodeSimilarity(wPriceNode1, wPriceNode2) > THRESHOLDS.TEXT_NODE,
        "wNodeSimilarity(wPriceNode1, wPriceNode2) > THRESHOLDS.TEXT_NODE"
    );
    assert.ok(
        wNodeSimilarity(wTitleNode1, wAuthorNode2) <= THRESHOLDS.TEXT_NODE,
        "wNodeSimilarity(wTitleNode1, wAuthorNode2) <= THRESHOLDS.TEXT_NODE"
    );
    assert.ok(
        wNodeSimilarity(wTitleNode1, wPriceNode2) <= THRESHOLDS.TEXT_NODE,
        "wNodeSimilarity(wTitleNode1, wPriceNode2) <= THRESHOLDS.TEXT_NODE"
    );
    assert.ok(
        wNodeSimilarity(wAuthorNode2, wPriceNode1) <= THRESHOLDS.TEXT_NODE,
        "wNodeSimilarity(wAuthorNode2, wPriceNode1) <= THRESHOLDS.TEXT_NODE"
    );

    assert.ok(
        wNodeSimilarity(wTitleLinkNode1, wTitleLinkNode2) > THRESHOLDS.HYPERLINK_NODE,
        "wNodeSimilarity(wTitleLinkNode1, wTitleLinkNode2) > THRESHOLDS.HYPERLINK_NODE"
    );
    assert.ok(
        wNodeSimilarity(wAuthorLinkNode1, wAuthorLinkNode2) > THRESHOLDS.HYPERLINK_NODE,
        "wNodeSimilarity(wAuthorLinkNode1, wAuthorLinkNode2) > THRESHOLDS.HYPERLINK_NODE"
    );
    assert.ok(
        wNodeSimilarity(wTitleLinkNode1, wAuthorLinkNode2) <= THRESHOLDS.HYPERLINK_NODE,
        "wNodeSimilarity(wTitleLinkNode1, wAuthorLinkNode2) <= THRESHOLDS.HYPERLINK_NODE"
    );
    assert.ok(
        wNodeSimilarity(wAuthorLinkNode1, wTitleLinkNode2) <= THRESHOLDS.HYPERLINK_NODE,
        "wNodeSimilarity(wAuthorLinkNode1, wTitleLinkNode2) <= THRESHOLDS.HYPERLINK_NODE"
    );

    assert.ok(
        wNodeSimilarity(wProductThumbnailNode1, wProductThumbnailNode2) > THRESHOLDS.IMAGE_NODE,
        "wNodeSimilarity(wProductThumbnailNode1, wProductThumbnailNode2) > THRESHOLDS.IMAGE_NODE"
    );
    assert.ok(
        wNodeSimilarity(wProductThumbnailNode1, wOtherImageNode) <= THRESHOLDS.IMAGE_NODE,
        "wNodeSimilarity(wProductThumbnailNode1, wOtherImageNode) <= THRESHOLDS.IMAGE_NODE"
    );    
});

WUnit.test("wTreeSimilarity", function(assert) {
    var THRESHOLDS = Webdext.Similarity.THRESHOLDS,
        wTreeSimilarity = Webdext.Similarity.wTreeSimilarity;
    var wTree = Webdext.Model.createWTree();
    var ulNode = Webdext.evaluateXPath(
        '//*[@id="mainResults"]/ul'
    )[0];
    var wUlNode = Webdext.Model.findWNode(ulNode, wTree);
    var wTree1 = wUlNode.children[0];
    var wTree2 = wUlNode.children[1];
    var wTree3 = wUlNode.children[wUlNode.children.length-1];

    assert.ok(
        wTreeSimilarity(wTree1, wTree2) > THRESHOLDS.TREE,
        "wTreeSimilarity(wTree1, wTree2) > THRESHOLDS.TREE"
    );
    assert.ok(
        wTreeSimilarity(wTree1, wTree3) > THRESHOLDS.TREE,
        "wTreeSimilarity(wTree1, wTree3) > THRESHOLDS.TREE"
    );
    assert.ok(
        wTreeSimilarity(wTree2, wTree3) > THRESHOLDS.TREE,
        "wTreeSimilarity(wTree2, wTree3) > THRESHOLDS.TREE"
    );
});

WUnit.test("clusterWTrees", function(assert) {
    var clusterWTrees = Webdext.Similarity.clusterWTrees;
    var wTree = Webdext.Model.createWTree();
    var ulNode = Webdext.evaluateXPath('//*[@id="mainResults"]/ul')[0];
    var wUlNode = Webdext.Model.findWNode(ulNode, wTree);
    var clusters = clusterWTrees(wUlNode.children);

    assert.strictEqual(
        clusters.length,
        1,
        "clusters.length != 1"
    );
    var allNodesInOneCluster = wUlNode.children.every(function(wNode) {
        return clusters[0].indexOf(wNode) > -1;
    });
    assert.ok(allNodesInOneCluster, "allNodesInOneCluster");
    var allClusterNodesInTrees = clusters[0].every(function(wNode) {
        return wUlNode.children.indexOf(wNode) > -1;
    });
    assert.ok(allClusterNodesInTrees, "allClusterNodesInTrees");
});

WUnit.test("filterTreeClusters", function(assert) {
    var clusterWTrees = Webdext.Similarity.clusterWTrees;
    var wTree = Webdext.Model.createWTree();
    var ulNode = Webdext.evaluateXPath('//*[@id="mainResults"]/ul')[0];
    var wUlNode = Webdext.Model.findWNode(ulNode, wTree);
    var clusters = clusterWTrees(wUlNode.children);
    var wNodeSet = wUlNode.children.slice(3);
    var filteredCluster = Webdext.Similarity.filterTreeClusters(clusters, wNodeSet);
    assert.strictEqual(
        filteredCluster.length,
        1,
        "filteredCluster.length != 1"
    );
    assert.strictEqual(
        filteredCluster[0].length,
        wUlNode.children.length-3,
        "filteredCluster[0].length != wUlNode.children.length-3"
    );
});

WUnit.test("identifyCoarseGrainedRegions", function(assert) {
    var identifyCoarseGrainedRegions = Webdext.Extraction.identifyCoarseGrainedRegions;
    var wTree = Webdext.Model.createWTree();
    var ulNode = Webdext.evaluateXPath('//*[@id="mainResults"]/ul')[0];
    var wUlNode = Webdext.Model.findWNode(ulNode, wTree);
    var wNodeSet = wUlNode.children;
    var cgrs = identifyCoarseGrainedRegions(wNodeSet);
    assert.strictEqual(cgrs.length, 1, "cgrs.length != 1");
    assert.strictEqual(
        cgrs[0].parent.valueOf(),
        "/html[1]/body[1]/div[2]/div[3]/div[1]/div[1]/div[1]/div[2]/div[2]/ul[1]",
        "cgrs[0].parent.valueOf()"
    );
    assert.strictEqual(cgrs[0].minIndex, 1, "cgrs[0].minIndex != 1");
    assert.strictEqual(cgrs[0].maxIndex, 12, "cgrs[0].maxIndex != 12");
});

WUnit.test("headBasedCRecMine", function(assert) {
    var wTree = Webdext.Model.createWTree();
    var ulNode = Webdext.evaluateXPath('//*[@id="mainResults"]/ul')[0];
    var wUlNode = Webdext.Model.findWNode(ulNode, wTree);
    var wNodeSet = wUlNode.children;
    var cRecSet = Webdext.Extraction.headBasedCRecMine(wNodeSet);
    assert.strictEqual(cRecSet.size(), 12, "cRecSet.size() != 12");
    assert.strictEqual(
        cRecSet.recordSet[0].getLeafNodes()[7].textContent,
        "Far and Wide: Bring That Horizon to Me!",
        "cRecSet.recordSet[0].getLeafNodes()[7].textContent"
    );
});

WUnit.test("orderBasedCRecMine", function(assert) {
    var wTree = Webdext.Model.createWTree();
    var ulNode = Webdext.evaluateXPath('//*[@id="mainResults"]/ul')[0];
    var wUlNode = Webdext.Model.findWNode(ulNode, wTree);
    var wNodeSet = wUlNode.children;
    var cRecSet = Webdext.Extraction.orderBasedCRecMine(wNodeSet);
    assert.strictEqual(cRecSet.size(), 12, "cRecSet.size() != 12");
    assert.strictEqual(
        cRecSet.recordSet[0].getLeafNodes()[7].textContent,
        "Far and Wide: Bring That Horizon to Me!",
        "cRecSet.recordSet[0].getLeafNodes()[7].textContent"
    );
});

WUnit.test("headOrderBasedCRecMine", function(assert) {
    var wTree = Webdext.Model.createWTree();
    var ulNode = Webdext.evaluateXPath('//*[@id="mainResults"]/ul')[0];
    var wUlNode = Webdext.Model.findWNode(ulNode, wTree);
    var wNodeSet = wUlNode.children;
    var cRecSet = Webdext.Extraction.headOrderBasedCRecMine(wNodeSet);
    assert.strictEqual(cRecSet.size(), 12, "cRecSet.size() != 12");
    assert.strictEqual(
        cRecSet.recordSet[0].getLeafNodes()[7].textContent,
        "Far and Wide: Bring That Horizon to Me!",
        "cRecSet.recordSet[0].getLeafNodes()[7].textContent"
    );
});

WUnit.test("integratedCRecMine", function(assert) {
    var wTree = Webdext.Model.createWTree();
    var ulNode = Webdext.evaluateXPath('//*[@id="mainResults"]/ul')[0];
    var wUlNode = Webdext.Model.findWNode(ulNode, wTree);
    var wNodeSet = wUlNode.children;
    var cRecSet = Webdext.Extraction.integratedCRecMine(wNodeSet);
    assert.strictEqual(cRecSet.size(), 12, "cRecSet.size() != 12");
    assert.strictEqual(
        cRecSet.recordSet[0].getLeafNodes()[7].textContent,
        "Far and Wide: Bring That Horizon to Me!",
        "cRecSet.recordSet[0].getLeafNodes()[7].textContent"
    );
});

WUnit.test("segmentCoarseGrainedRegion", function(assert) {
    var identifyCoarseGrainedRegions = Webdext.Extraction.identifyCoarseGrainedRegions,
        segmentCoarseGrainedRegion = Webdext.Extraction.segmentCoarseGrainedRegion;
    var wTree = Webdext.Model.createWTree();
    var ulNode = Webdext.evaluateXPath('//*[@id="mainResults"]/ul')[0];
    var wUlNode = Webdext.Model.findWNode(ulNode, wTree);
    var wNodeSet = wUlNode.children;
    var cgrs = identifyCoarseGrainedRegions(wNodeSet);
    var cRecSet = segmentCoarseGrainedRegion(cgrs[0]);
    assert.strictEqual(cRecSet.size(), 12, "cRecSet.size() != 12");
    assert.strictEqual(
        cRecSet.recordSet[0].getLeafNodes()[7].textContent,
        "Far and Wide: Bring That Horizon to Me!",
        "cRecSet.recordSet[0].getLeafNodes()[7].textContent"
    ); 
});

WUnit.test("extract", function(assert) {
    var recSetList = Webdext.extract();
    assert.strictEqual(recSetList.length, 27, "recSetList.length != 27");
    assert.strictEqual(recSetList[0].size(), 12, "recSetList[0].size() != 12");
    assert.strictEqual(
        recSetList[0].recordSet[0].dataItems[6].dataContent,
        "Far and Wide: Bring That Horizon to Me!",
        "recSetList[0].recordSet[0].dataItems[6].dataContent != Far and Wide: Bring That Horizon to Me!"
    );
    assert.strictEqual(
        recSetList[0].recordSet[0].dataItems[14].dataContent,
        "$19.72",
        "recSetList[0].recordSet[0].dataItems[14].dataContent != $19.72"
    );
    assert.strictEqual(
        recSetList[0].recordSet[11].dataItems[6].dataContent,
        "Manual D Residential Duct Systems",
        "recSetList[0].recordSet[11].dataItems[6].dataContent != Manual D Residential Duct Systems"
    );
    assert.strictEqual(
        recSetList[0].recordSet[11].dataItems[14].dataContent,
        "$58.19",
        "recSetList[0].recordSet[11].dataItems[14].dataContent != $58.19"
    );
});

// headBasedCRecMine === orderBasedCRecMine
console.log("End Amazon test");
