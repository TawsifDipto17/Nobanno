/**
 * Class to handle webcam
 */
export class Webcam {
  /**
   * Open webcam and stream it through video tag.
   * @param {HTMLVideoElement} videoRef video tag reference
   */
  open = (videoRef) => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({
          audio: false,
          video: {
            facingMode: "environment",
          },
        })
        .then((stream) => {
          videoRef.srcObject = stream;
        });
    } else alert("ওয়েবক্যাম খুলতে পারছি না!");
  };

  /**
   * Close opened webcam.
   * @param {HTMLVideoElement} videoRef video tag reference
   */
  close = (videoRef) => {


    const cure_disease=document.getElementById("cure_disease")
    const cure_symptom=document.getElementById("cure_symptom")
    const cure_cure=document.getElementById("cure_cure")


    cure_disease.innerHTML=" "
    cure_symptom.innerHTML=" "
    cure_cure.innerHTML=" "
    if (videoRef.srcObject) {
      videoRef.srcObject.getTracks().forEach((track) => {
        track.stop();
      });
      videoRef.srcObject = null;
    } else alert("ওয়েবক্যাম খুলুন!");
  };
}
