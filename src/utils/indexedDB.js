const DB_NAME = "ResumeIQ_DB";
const STORE_NAME = "resumeStore";

function openDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);

    request.onupgradeneeded = () => {
      const db = request.result;

      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };

    request.onsuccess = () => {
      resolve(request.result);
    };

    request.onerror = () => {
      reject(request.error);
    };
  });
}

export async function saveResume(file) {
  const db = await openDB();

  const tx = db.transaction(STORE_NAME, "readwrite");

  tx.objectStore(STORE_NAME).put(file, "resume");

  return tx.done;
}

export async function getResume() {
  const db = await openDB();

  return new Promise((resolve) => {

    const tx = db.transaction(STORE_NAME);

    const req = tx.objectStore(STORE_NAME).get("resume");

    req.onsuccess = () => resolve(req.result);

    req.onerror = () => resolve(null);

  });
}

export async function deleteResume() {

  const db = await openDB();

  const tx = db.transaction(STORE_NAME, "readwrite");

  tx.objectStore(STORE_NAME).delete("resume");

}