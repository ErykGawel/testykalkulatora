describe("Podstawowe obliczenia", () => {
  beforeAll(async () => {
    await page.goto("file://D:/testowaniekalk/index.html");
  });


  test("Test dodawania 1+2", async () => {
    await page.click('#one');
    await page.click('#mnozenie');
    await page.click('#two');
    
    await page.click('#rowna');
    let output = await page.$eval("input#wynik", (input) => input.value);
    expect(output).toBe('2');
  });

  test("Test odejmowania 2-1", async () => {
    await page.click('#c');
    await page.click('#two');
    await page.click('#odejmowanie');
    await page.click('#one');

    await page.click('#rowna');
    let output = await page.$eval("input#wynik", (input) => input.value);
    expect(output).toBe('1');
  });

  test("Test mnozenia 6*9", async () => {
    await page.click('#c');
    await page.click('#six');
    await page.click('#mnozenie');
    await page.click('#nine');

    await page.click('#rowna');
    let output = await page.$eval("input#wynik", (input) => input.value);
    expect(output).toBe('54');
  });

  test("Test potegi 2^2", async () => {
    await page.click('#c');
    await page.click('#two');
    await page.click('#kwadrat');
    //await page.click('#two');

    await page.click('#rowna');
    let output = await page.$eval("input#wynik", (input) => input.value);
    expect(output).toBe('4');
  });

  test("Test 2!", async () => {
    await page.click('#c');
    await page.click('#two');
    await page.click('#silnia');
    //await page.click('#one');

    await page.click('#rowna');
    let output = await page.$eval("input#wynik", (input) => input.value);
    expect(output).toBe('2');
  });

  test("Test dzielenia 14/7", async () => {
    await page.click('#c');
    await page.click('#one');
    await page.click('#four');
    await page.click('#dzielenie');
    await page.click('#seven');

    await page.click('#rowna');
    let output = await page.$eval("input#wynik", (input) => input.value);
    expect(output).toBe('2');
  });

  test("Test mnozenia 12*11", async () => {
    await page.click('#c');
    await page.click('#one');
    await page.click('#two');
    await page.click('#mnozenie');
    await page.click('#one');
    await page.click('#one');

    await page.click('#rowna');
    let output = await page.$eval("input#wynik", (input) => input.value);
    expect(output).toBe('132');
  });

  test("Test pierwiastek kwadratowy 144", async () => {
    await page.click('#c');
    await page.click('#one');
    await page.click('#four');
    await page.click('#four');
    await page.click('#pierwiastek');
    //await page.click('#one');

    await page.click('#rowna');
    let output = await page.$eval("input#wynik", (input) => input.value);
    expect(output).toBe('12');
  });

  test("Test nawias 12-(2+2)", async () => {
    await page.click('#c');
    await page.click('#one');
    await page.click('#two');
    await page.click('#odejmowanie');
    await page.click('#nawias-lewy');
    await page.click('#two');
    await page.click('#dodawanie');
    await page.click('#two');
    await page.click('#nawias-prawy');

    await page.click('#rowna');
    let output = await page.$eval("input#wynik", (input) => input.value);
    expect(output).toBe('8');
  });



  
});

describe("Trygonometria", () => {
    beforeAll(async () => {
      await page.goto("file://D:/testowaniekalk/index.html");
    });

    test("Test sinus 12", async () => {
        await page.click('#c');
        await page.click('#one');
        await page.click('#two');
        await page.click('#sin');
    
        await page.click('#rowna');
        let output = await page.$eval("input#wynik", (input) => input.value);
        expect(output).toBe('-0.5365729180004349');
      });
    
      test("Test sinus 15", async () => {
        await page.click('#c');
        await page.click('#one');
        await page.click('#five');
        await page.click('#sin');
    
        await page.click('#rowna');
        let output = await page.$eval("input#wynik", (input) => input.value);
        expect(output).toBe('0.6502878401571168');
      });
    
      test("Test cosinus 22", async () => {
        await page.click('#c');
        await page.click('#two');
        await page.click('#two');
        await page.click('#cos');
    
        await page.click('#rowna');
        let output = await page.$eval("input#wynik", (input) => input.value);
        expect(output).toBe('-0.9999608263946371');
      });
    
      test("Test cosinus 32", async () => {
        await page.click('#c');
        await page.click('#three');
        await page.click('#two');
        await page.click('#cos');
    
        await page.click('#rowna');
        let output = await page.$eval("input#wynik", (input) => input.value);
        expect(output).toBe('0.8342233605065102');
      });
    
      test("Test tangens 41", async () => {
        await page.click('#c');
        await page.click('#four');
        await page.click('#one');
        await page.click('#tan');
    
        await page.click('#rowna');
        let output = await page.$eval("input#wynik", (input) => input.value);
        expect(output).toBe('0.16065669868064283');
      });
    
      test("Test tangens 12", async () => {
        await page.click('#c');
        await page.click('#one');
        await page.click('#two');
        await page.click('#tan');
    
        await page.click('#rowna');
        let output = await page.$eval("input#wynik", (input) => input.value);
        expect(output).toBe('-0.6358599286615808');
      });

});