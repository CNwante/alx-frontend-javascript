interface MajorCredits {
  credits: number;
  readonly brand: unique symbol;
}

interface MinorCredits {
  credits: number;
  readonly brand: unique symbol;
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
 return {
  credits: subject1.credits + subject2.credits,
  brand: Symbol() as MajorCredits['brand'],
 };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: Symbol() as MinorCredits['brand'],
  };
}
