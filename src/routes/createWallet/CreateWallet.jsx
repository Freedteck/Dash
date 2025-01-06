import { FileInput, Settings } from "lucide-react";
import styles from "./CreateWallet.module.css";
import barcode from "../../assets/barcode.png";
import { useState } from "react";

const CreateWallet = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };
  const seeds = [
    "always",
    "crater",
    "fire",
    "upon",
    "drama",
    "uniform",
    "phone",
    "swing",
    "biology",
    "pull",
    "boil",
    "donor",
    "radio",
    "few",
    "castle",
    "major",
    "power",
    "debris",
    "word",
    "thing",
    "delay",
    "elder",
    "mirror",
    "crush",
  ];
  return (
    <main className={styles.createWallet}>
      <section className={styles.left}>
        <p className={styles.heading}>
          Follow these <br /> <span>3 simple steps</span> to <br />
          create your <br />
          Dash wallet:
        </p>
        <div className={styles.import}>
          <p>Already have a Dash wallet?</p>
          <button>
            Import secrete phrase
            <FileInput size={16} />
          </button>
        </div>
      </section>
      <section className={styles.right}>
        <ul className={styles.steps}>
          <li className={styles.step}>
            <p>
              <span>Step 1</span> Hover over this view to create extra
              randomness for the seed phrase.
            </p>
            <img src={barcode} alt="barcode" />
            <small>
              User number is
              [b55c2ec5949b4926035083305fe2c38a2b723795abb888283b032c7346d534b],
              <br />
              this will be added to a random number to add extra entropy and
              ensure security.
            </small>
          </li>
          <li className={styles.step}>
            <div className={styles.generate}>
              <p>
                <span>Step 2</span> Select your desired seed phrase language and
                press &ldquo;Generate&rdquo;.
              </p>
              <form>
                <select name="language">
                  <option value="english">English</option>
                  <option value="spanish">Spanish</option>
                  <option value="french">French</option>
                  <option value="german">German</option>
                </select>
                <button>
                  Generate <Settings size={20} />
                </button>
              </form>
            </div>
            <div className={styles.seeds}>
              <div>
                {seeds.map((seed, index) => (
                  <p key={index} className={styles.seed}>
                    <span>{index + 1}</span>
                    {seed}
                  </p>
                ))}
              </div>
            </div>
          </li>
          <li className={styles.step}>
            <p>
              <span>Step 3</span> Write down the passphrase on a piece of paper
              and put it somewhere secure.
            </p>
            <div
              className={`${styles.toggle} ${isChecked ? styles.checked : ""} `}
            >
              <label
                className={`${styles.checkbox} ${
                  isChecked ? styles.checked : ""
                }`}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <span className={styles.circle}></span>
              </label>
              I wrote it down
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default CreateWallet;
